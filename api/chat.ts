import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing.");
    }

    const knowledgePath = path.join(
      process.cwd(),
      "api",
      "knowledge-base.json"
    );

    const knowledge = JSON.parse(
      fs.readFileSync(knowledgePath, "utf8")
    );

    const { question } = req.body;

    const prompt = `
You are Tejas Kangule's AI Portfolio Assistant.

You MUST answer ONLY using the information below.

Never make up information.

If the answer is unavailable, respond exactly like this:

"I'm sorry, but that information is currently not available on this portfolio website.

Please contact Tejas directly.

Email:
${knowledge.contact.email}

LinkedIn:
${knowledge.contact.linkedin}

GitHub:
${knowledge.contact.github}"

Portfolio Information:

${JSON.stringify(knowledge, null, 2)}

User Question:

${question}
`;

    const ai = new GoogleGenAI({
      apiKey,
    });

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    return res.status(200).json({
      success: true,
      answer: response.text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
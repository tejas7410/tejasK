import type { VercelRequest, VercelResponse } from "@vercel/node";
import { askPortfolioAssistant } from "../server/services/gemini.ts";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

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
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required.",
      });
    }

    const answer = await askPortfolioAssistant(question);

    return res.status(200).json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
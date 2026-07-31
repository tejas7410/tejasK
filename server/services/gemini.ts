import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "./prompt.ts";

export async function askPortfolioAssistant(
  question: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is missing. Please check your .env file."
    );
  }

  const ai = new GoogleGenAI({
    apiKey,
  });

  const response = await ai.models.generateContent({
   model: "gemini-flash-latest",
    contents: `
${buildSystemPrompt()}

User Question:
${question}
`,
  });

  return response.text ?? "No response generated.";
}
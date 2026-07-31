import { Request, Response } from "express";
import { askPortfolioAssistant } from "../services/gemini";

export async function chatController(req: Request, res: Response) {
  try {
    const { question } = req.body;

    // Validate input
    if (!question || typeof question !== "string") {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid question.",
      });
    }

    // Ask the AI
    const answer = await askPortfolioAssistant(question);

    // Return response
    return res.status(200).json({
      success: true,
      answer,
    });

  } catch (error) {
    console.error("Chat Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
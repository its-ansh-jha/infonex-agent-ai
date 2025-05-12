import OpenAI from "openai";
import { Request, Response } from "express";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to handle chat completion
export async function handleChatCompletion(req: Request, res: Response) {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      messages: messages,
      temperature: 0.7,
    });

    return res.status(200).json({
      message: response.choices[0].message,
      usage: response.usage,
    });
  } catch (error: any) {
    console.error("OpenAI API Error:", error);
    return res.status(500).json({
      error: "An error occurred while processing your request",
      details: error.message,
    });
  }
}
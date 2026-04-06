
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  private getAI(): GoogleGenAI {
    if (!this.ai) {
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing.");
      }
      this.ai = new GoogleGenAI({ apiKey });
    }
    return this.ai;
  }

  async getClinicalAnalysis(prompt: string) {
    try {
      const ai = this.getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are a senior clinical consultant for GOQii Connected Care. Your goal is to explain how continuous monitoring and AI-driven insights help hospitals reduce readmissions and improve patient safety. Be professional, data-driven, and concise. Format output in Markdown.",
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I couldn't process that clinical scenario right now. Please try again later.";
    }
  }
}

export const gemini = new GeminiService();

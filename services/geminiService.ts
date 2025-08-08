import { GoogleGenAI, Type } from "@google/genai";
import type { MakeupIdea } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    name: {
      type: Type.STRING,
      description: "A short, catchy, and magical name for the makeup look.",
    },
    description: {
      type: Type.STRING,
      description: "A brief, one-sentence whimsical description of the makeup style.",
    },
    eyeshadowColor: {
      type: Type.STRING,
      description: "A CSS hex color code for the eyeshadow. e.g., #d8b4fe",
    },
    lipstickColor: {
      type: Type.STRING,
      description: "A CSS hex color code for the lipstick. e.g., #f472b6",
    },
    blushColor: {
      type: Type.STRING,
      description: "A CSS hex color code for the blush. e.g., #fda4af",
    },
  },
  required: ["name", "description", "eyeshadowColor", "lipstickColor", "blushColor"],
};


export const generateMakeupIdea = async (): Promise<MakeupIdea> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a creative and whimsical makeup idea for a fairy princess. Provide a catchy name, a brief description, and specific hex colors for eyeshadow, lipstick, and blush.",
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 1,
        topP: 0.95,
      },
    });

    const text = response.text.trim();
    // The response text should already be a valid JSON string due to responseSchema
    const parsedIdea = JSON.parse(text);

    // Basic validation to ensure the parsed object matches the MakeupIdea structure
    if (
      parsedIdea.name &&
      parsedIdea.description &&
      parsedIdea.eyeshadowColor &&
      parsedIdea.lipstickColor &&
      parsedIdea.blushColor
    ) {
      return parsedIdea as MakeupIdea;
    } else {
      throw new Error("Received malformed idea from API.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate a makeup idea from the AI muse.");
  }
};
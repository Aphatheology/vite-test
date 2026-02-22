import { GoogleGenAI, Type, Schema } from "@google/genai";
import OpenAI from "openai";

// --- CONFIGURATION ---
const AI_PROVIDER = process.env.AI_PROVIDER || "gemini";

// Gemini Config
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY || "";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3-flash-preview";

// OpenAI Config
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

// --- INITIALIZATION ---
let geminiClient: GoogleGenAI | null = null;
let openaiClient: OpenAI | null = null;

if (AI_PROVIDER === "gemini") {
  if (!GEMINI_API_KEY) console.warn("Missing GEMINI_API_KEY");
  else geminiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
} else {
  if (!OPENAI_API_KEY) console.warn("Missing OPENAI_API_KEY");
  else
    openaiClient = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
}

export const setupAi = async () => {
  console.log("AI setup initiated with provider:", AI_PROVIDER);
  try {
    if (AI_PROVIDER === "gemini" && geminiClient) {
      console.log("Testing Gemini...");
      const response = await geminiClient.models.generateContent({
        model: GEMINI_MODEL,
        contents: "Say hello!",
      });
      console.log("Gemini response:", response.text);
      alert("Gemini Setup Success: " + response.text);
    } else if (openaiClient) {
      console.log("Testing OpenAI...");
      const response = await openaiClient.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [{ role: "user", content: "Say hello!" }],
      });
      console.log("OpenAI response:", response.choices[0].message.content);
      alert("OpenAI Setup Success: " + response.choices[0].message.content);
    } else {
      alert("Client not initialized. Check console for missing API keys.");
    }
  } catch (e) {
    console.error("Error setting up AI", e);
    alert("Error setting up AI. Check console.");
  }
};

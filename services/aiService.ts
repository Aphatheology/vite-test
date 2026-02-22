import { GoogleGenAI, Type, Schema } from "@google/genai";
import OpenAI from "openai";

// --- CONFIGURATION ---
const AI_PROVIDER = process.env.AI_PROVIDER || 'gemini';

// Gemini Config
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

// OpenAI Config
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

// --- INITIALIZATION ---
let geminiClient: GoogleGenAI | null = null;
let openaiClient: OpenAI | null = null;

if (AI_PROVIDER === 'gemini') {
    if (!GEMINI_API_KEY) console.warn("Missing GEMINI_API_KEY");
    else geminiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
} else {
    if (!OPENAI_API_KEY) console.warn("Missing OPENAI_API_KEY");
    else openaiClient = new OpenAI({ 
        apiKey: OPENAI_API_KEY, 
        dangerouslyAllowBrowser: true 
    });
}

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askGeminiAboutAE = async (query: string, context?: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are an expert Adobe After Effects (AE) instructor. 
      Your goal is to help a student understand AE concepts, effects, expressions, and shortcuts.
      The user asks questions in Chinese.
      Provide clear, concise, and practical explanations.
      If explaining an expression, provide code snippets.
      If explaining an effect, describe what it visually does and when to use it.
      Context provided: ${context || 'None'}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "无法获取 AI 回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 服务暂时不可用，请稍后再试。";
  }
};
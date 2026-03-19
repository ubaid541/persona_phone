import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface AssessmentAnswers {
  lifestyle: string;
  values: string;
  aesthetic: string;
  usage: string;
  budget: string;
}

export interface PhoneRecommendation {
  model: string;
  brand: string;
  reasoning: string;
  keyFeatures: string[];
  personalityMatch: string;
}

export async function getPhoneRecommendation(answers: AssessmentAnswers): Promise<PhoneRecommendation> {
  const prompt = `
    Based on the following personality and lifestyle assessment, recommend the single best smartphone for this person.
    
    Assessment Answers:
    - Lifestyle: ${answers.lifestyle}
    - Values: ${answers.values}
    - Aesthetic Preferences: ${answers.aesthetic}
    - Usage Patterns: ${answers.usage}
    - Budget: ${answers.budget}
    
    Provide a detailed recommendation including the model name, brand, a deep reasoning of why it fits their personality, key features that match their needs, and a description of their "personality match" archetype.
  `;

  const response = await ai.models.generateContent({
    // model: "gemini-3-flash-preview",
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          model: { type: Type.STRING },
          brand: { type: Type.STRING },
          reasoning: { type: Type.STRING },
          keyFeatures: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          personalityMatch: { type: Type.STRING }
        },
        required: ["model", "brand", "reasoning", "keyFeatures", "personalityMatch"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
}

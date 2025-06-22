// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

async function service(prompt) {
  try {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyA7zOuWs5DKW0BmYDPWSgLJYLehMFPgul4",
    });
    const config = {
      responseMimeType: "text/plain",
    };
    const model = "gemini-2.0-flash";
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `${prompt}`,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let result = "";
    for await (const chunk of response) {
      result += chunk.text;
    }
    return result;
  } catch (error) {
    console.log(error);
    return "Something went wrong. Please try again.";
  }
}

export default service;

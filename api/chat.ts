import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY || "",
  baseURL: "https://api.x.ai/v1",
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = request.body;

    if (!messages || !Array.isArray(messages)) {
      return response.status(400).json({ error: "Messages array is required" });
    }

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `你是 Iris Limo 的智能助手，帮助用户了解和预订豪华轿车服务。请用专业、礼貌的语气回答问题。
          
          主要服务包括：
          - 机场接送
          - 商务用车
          - 葡萄酒庄游
          - 特殊活动用车
          
          如需预约或了解具体价格，请告知用户拨打电话：(510) 432-0608
          `
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 800
    });

    return response.status(200).json({
      message: completion.choices[0].message.content
    });
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({
      error: "An error occurred while processing your request"
    });
  }
}

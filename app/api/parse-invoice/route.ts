import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log("🚀 Received prompt:", prompt); // Log input

    const systemPrompt = `
You are an invoicing assistant. Convert the user's sentence into a JSON object with the following keys:
- client_name (string)
- description (string)
- amount (number)
- due_date (YYYY-MM-DD format)

Respond with only valid JSON. No extra explanation or formatting.
`;

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    });

    console.log("✅ GPT response:", response); // Log full GPT response

    const result = response.choices[0]?.message?.content;
    return NextResponse.json({ result });
  } catch (error) {
    console.error("❌ API Error:", error); // Log the exact error
    return NextResponse.json(
      { error: 'Something went wrong while generating the invoice.' },
      { status: 500 }
    );
  }
}

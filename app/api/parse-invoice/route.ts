import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log("🚀 Received prompt:", prompt);

    const systemPrompt = `
You are an invoicing assistant. Convert the user's request into a detailed invoice JSON object with this structure:

{
  "sender_name": "Your Name or Company",
  "sender_email": "your@email.com",
  "bank_name": "Bank Name",
  "account_number": "XXXXXXXXXXXX",
  "ifsc": "IFSC0001234",
  "upi": "yourupi@bank",
  "client_name": "Client Name",
  "due_date": "YYYY-MM-DD",
  "items": [
    {
      "description": "Service Description",
      "quantity": 1,
      "unit_price": 100,
      "subtotal": 100
    }
  ],
  "total": 1000,
  "notes": "Payment due within 7 days."
}

Rules:
- Include at least one item in the items array.
- Calculate subtotal = quantity × unit_price for each item.
- Sum subtotals into the total field.
- Respond with only valid JSON. No comments, no markdown.
`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });

    const result = response.choices[0]?.message?.content;
    console.log("✅ GPT response:", result);

    return NextResponse.json({ result });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { error: 'Something went wrong while generating the invoice.' },
      { status: 500 }
    );
  }
}

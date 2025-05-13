import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userPrompt } = await req.json();

  const systemPrompt = `
You are a creative poster copywriter.

Given a rough idea, generate:
- A catchy heading
- A short subheading
- A footer with a date, offer period, or location

Respond ONLY in this JSON format:
{
  "heading": "string",
  "subheading": "string",
  "footer": "string"
}
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: 500 });
  }

  const data = await res.json();
  const content = data.choices[0].message.content;

  return NextResponse.json({ copy: content });
}

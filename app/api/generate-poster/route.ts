import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      size: '1024x1024',
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Image generation failed' }, { status: 500 });
  }

  const data = await res.json();
  const imageUrl = data.data[0].url;

  return NextResponse.json({ imageUrl });
}

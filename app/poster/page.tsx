"use client";

import { useState } from "react";

export default function PosterGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrl("");

    const res = await fetch("/api/generate-poster", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setImageUrl(data.imageUrl);
    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "ai-poster.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 max-w-xl mx-auto font-body">
      <h1 className="text-2xl font-bold mb-4">🎨 AI Poster Generator</h1>
      <p className="text-sm text-gray-600 mb-6">
        Describe the poster you want. Example: <br />
        <em>"50% off Diwali sale at Aryan Café, bold text, festive theme"</em>
      </p>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your poster..."
          className="flex-1 border px-3 py-2 text-sm rounded"
        />
        <button
          onClick={handleGenerate}
          className="bg-black text-white px-4 py-2 rounded text-sm"
        >
          Generate
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Generating poster...</p>}

      {imageUrl && (
        <div className="mt-6 text-center space-y-4">
          <img
            src={imageUrl}
            alt="Generated Poster"
            className="w-full rounded shadow-md"
          />
          <div className="flex justify-center gap-3">
            <button
              onClick={handleDownload}
              className="bg-yellow-400 px-4 py-2 rounded text-sm font-medium"
            >
              Download Poster
            </button>
            <button
              onClick={handleGenerate}
              className="border border-gray-400 px-4 py-2 rounded text-sm"
            >
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

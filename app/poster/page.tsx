"use client";

import { useState } from "react";
import html2canvas from "html2canvas";

export default function PosterGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [copy, setCopy] = useState({ heading: "", subheading: "", footer: "" });
  const [loading, setLoading] = useState(false);

  const backgrounds = [
    { name: "Modern 1", file: "modern-1.jpg" },
    { name: "Festive 1", file: "festive-1.jpg" },
    { name: "Offer 1", file: "offer-1.jpg" },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setCopy({ heading: "", subheading: "", footer: "" });

    try {
      const res = await fetch("/api/poster-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: prompt }),
      });

      const data = await res.json();
      const parsedCopy = JSON.parse(data.copy);
      setCopy(parsedCopy);
    } catch (err) {
      console.error("GPT copy failed", err);
    }

    setLoading(false);
  };

  const handleDownload = async () => {
    const element = document.getElementById("poster");
    if (!element) return;

    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 max-w-xl mx-auto font-body">
      <h1 className="text-2xl font-bold mb-4">🎨 AI Poster Generator</h1>
      <p className="text-sm text-gray-600 mb-4">
        Type your poster idea and select a background.
      </p>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. Diwali offer for bakery"
        className="w-full border px-3 py-2 text-sm rounded mb-4"
      />

      <p className="text-sm font-medium mb-2">Select a Background:</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {backgrounds.map((bg) => {
          const url = `/poster-backgrounds/${bg.file}`;
          return (
            <img
              key={bg.file}
              src={url}
              alt={bg.name}
              className={`rounded border-2 cursor-pointer ${
                imageUrl === url ? "border-black" : "border-transparent"
              }`}
              onClick={() => setImageUrl(url)}
            />
          );
        })}
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-black text-white py-2 rounded text-sm"
      >
        Generate Poster Text
      </button>

      {loading && <p className="text-sm text-gray-500 mt-2">Generating...</p>}

      {imageUrl && copy.heading && (
        <div className="mt-6">
          <div
            id="poster"
            className="relative w-full rounded shadow-md overflow-hidden"
          >
            <img src={imageUrl} alt="Poster Background" className="w-full" />
            <div className="absolute top-8 left-6 right-6 text-white text-center">
              <h1 className="text-3xl font-bold drop-shadow">{copy.heading}</h1>
              <p className="text-lg drop-shadow mt-2">{copy.subheading}</p>
              <p className="text-sm mt-12 text-white/90">{copy.footer}</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-4">
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
              Regenerate Text
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

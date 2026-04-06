
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeneratedHeroImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
        if (!apiKey) {
          console.warn("GEMINI_API_KEY is missing. Skipping image generation.");
          setError(true);
          setLoading(false);
          return;
        }
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: 'A high-quality split-screen cinematic image. On the left side, a professional doctor in a white coat walks down a modern hospital corridor holding a glowing tablet. On the right side, an elderly man sits comfortably on a sofa in a warm, sunlit living room looking at his smartwatch. A glowing blue vital sign pulse wave connects the doctor\'s tablet to the man\'s smartwatch, symbolizing connected care. Professional lighting, 16:9 aspect ratio, photorealistic, clean medical aesthetic.',
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64EncodeString}`);
            break;
          }
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, []);

  if (loading) {
    return (
      <div className="w-full aspect-video bg-slate-100 rounded-[2.5rem] flex items-center justify-center animate-pulse border border-slate-200">
        <div className="text-center">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-slate-400 text-sm font-medium">Generating Clinical Visual...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className="w-full aspect-video bg-slate-50 rounded-[2.5rem] flex items-center justify-center border border-slate-200">
        <p className="text-slate-400 text-sm">Previewing Connected Care Infrastructure</p>
      </div>
    );
  }

  return (
    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100">
      <img 
        src={imageUrl} 
        alt="GOQii Connected Care Visual" 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default GeneratedHeroImage;

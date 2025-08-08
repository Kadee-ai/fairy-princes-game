import React, { useState, useCallback } from 'react';
import { FairyCanvas } from './components/FairyCanvas';
import { MakeupPalette } from './components/MakeupPalette';
import { IdeaGenerator } from './components/IdeaGenerator';
import { Header } from './components/Header';
import { ResetButton } from './components/ResetButton';
import { generateMakeupIdea } from './services/geminiService';
import type { MakeupColors, MakeupIdea } from './types';
import { MakeupCategory } from './types';
import { INITIAL_COLORS } from './constants';

export default function App(): React.ReactNode {
  const [makeupColors, setMakeupColors] = useState<MakeupColors>(INITIAL_COLORS);
  const [idea, setIdea] = useState<MakeupIdea | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleColorSelect = (category: MakeupCategory, color: string): void => {
    setMakeupColors(prevColors => ({
      ...prevColors,
      [category]: color
    }));
  };
  
  const handleReset = (): void => {
    setMakeupColors(INITIAL_COLORS);
    setIdea(null);
  };

  const handleGenerateIdea = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setIdea(null);
    try {
      const newIdea = await generateMakeupIdea();
      setIdea(newIdea);
      setMakeupColors({
        [MakeupCategory.Eyeshadow]: newIdea.eyeshadowColor,
        [MakeupCategory.Lipstick]: newIdea.lipstickColor,
        [MakeupCategory.Blush]: newIdea.blushColor,
      });
    } catch (err) {
      console.error("Failed to generate makeup idea:", err);
      setError("The magic failed! Could not generate an idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-3 flex flex-col items-center justify-center bg-white/50 rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-white/30">
            <FairyCanvas colors={makeupColors} />
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="bg-white/50 rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-white/30">
              <h2 className="text-2xl font-bold text-pink-500 mb-4">Choose Your Magic</h2>
              <MakeupPalette onColorSelect={handleColorSelect} selectedColors={makeupColors} />
              <ResetButton onClick={handleReset} />
            </div>

            <div className="bg-white/50 rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-white/30">
              <IdeaGenerator
                onGenerate={handleGenerateIdea}
                idea={idea}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
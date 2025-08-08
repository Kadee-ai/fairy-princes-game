import React from 'react';
import { COLOR_PALETTES } from '../constants';
import type { MakeupCategory, MakeupColors } from '../types';

interface MakeupPaletteProps {
  onColorSelect: (category: MakeupCategory, color: string) => void;
  selectedColors: MakeupColors;
}

const categoryNames: Record<MakeupCategory, string> = {
  eyeshadow: 'Eyeshadow',
  lipstick: 'Lipstick',
  blush: 'Blush',
};

export const MakeupPalette = ({ onColorSelect, selectedColors }: MakeupPaletteProps): React.ReactNode => {
  return (
    <div className="space-y-5">
      {(Object.keys(COLOR_PALETTES) as MakeupCategory[]).map((category) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{categoryNames[category]}</h3>
          <div className="flex flex-wrap gap-2">
            {COLOR_PALETTES[category].map((color) => (
              <button
                key={color}
                onClick={() => onColorSelect(category, color)}
                className={`w-10 h-10 rounded-full cursor-pointer transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 ${
                  selectedColors[category] === color ? 'ring-2 ring-offset-2 ring-pink-500' : 'ring-1 ring-gray-300'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color} for ${categoryNames[category]}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
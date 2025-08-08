import React from 'react';
import type { MakeupColors } from '../types';
import { MakeupCategory } from '../types';

interface FairyCanvasProps {
  colors: MakeupColors;
}

export const FairyCanvas = ({ colors }: FairyCanvasProps): React.ReactNode => {
  return (
    <div className="relative w-full max-w-md aspect-square">
       <svg viewBox="0 0 500 500" className="w-full h-full">
        {/* Base Face */}
        <g id="face-base">
          <circle cx="250" cy="250" r="150" fill="#fdece3" stroke="#e6c8b9" strokeWidth="3" />
           <path d="M180,210 a40,40 0 0,1 80,0" fill="none" stroke="#6b4635" strokeWidth="5" strokeLinecap="round" transform="translate(30, -5)" />
          <path d="M320,210 a40,40 0 0,0 -80,0" fill="none" stroke="#6b4635" strokeWidth="5" strokeLinecap="round" transform="translate(-30, -5)"/>
          <circle cx="210" cy="225" r="10" fill="#6b4635" />
          <circle cx="290" cy="225" r="10" fill="#6b4635" />
          <path d="M230,280 a20,15 0 0,0 40,0" fill="none" stroke="#e58e80" strokeWidth="4" strokeLinecap="round" />
        </g>
        
        {/* Blush */}
        <g id="blush-layer" style={{ transition: 'fill 0.5s ease' }}>
          <ellipse cx="180" cy="260" rx="30" ry="15" fill={colors[MakeupCategory.Blush]} opacity="0.6" />
          <ellipse cx="320" cy="260" rx="30" ry="15" fill={colors[MakeupCategory.Blush]} opacity="0.6" />
        </g>

        {/* Eyeshadow */}
        <g id="eyeshadow-layer" style={{ transition: 'fill 0.5s ease' }}>
            <path d="M190,215 Q210,195 230,215 Z" fill={colors[MakeupCategory.Eyeshadow]} opacity="0.8" />
            <path d="M270,215 Q290,195 310,215 Z" fill={colors[MakeupCategory.Eyeshadow]} opacity="0.8" />
        </g>
        
        {/* Lipstick */}
        <g id="lipstick-layer" style={{ transition: 'fill 0.5s ease' }}>
            <path d="M235,280 Q250,295 265,280 Q250,290 235,280 Z" fill={colors[MakeupCategory.Lipstick]} />
        </g>
      </svg>
    </div>
  );
};
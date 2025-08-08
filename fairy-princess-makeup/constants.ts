
import type { MakeupColors } from './types';
import { MakeupCategory } from './types';

export const INITIAL_COLORS: MakeupColors = {
  [MakeupCategory.Eyeshadow]: 'transparent',
  [MakeupCategory.Lipstick]: 'transparent',
  [MakeupCategory.Blush]: 'transparent',
};

export const COLOR_PALETTES = {
  [MakeupCategory.Eyeshadow]: [
    '#a7f3d0', // Mint Glimmer
    '#d8b4fe', // Lavender Dream
    '#fbcfe8', // Rose Petal
    '#bae6fd', // Sky Whisper
    '#fde68a', // Sunbeam Gold
    '#e2e8f0', // Silver Mist
  ],
  [MakeupCategory.Lipstick]: [
    '#fb7185', // Coral Kiss
    '#f472b6', // Fuchsia Flash
    '#c084fc', // Orchid Charm
    '#f87171', // Poppy Red
    '#fb923c', // Nectarine Shine
    '#fda4af', // Peony Pink
  ],
  [MakeupCategory.Blush]: [
    '#fda4af', // Soft Pink
    '#fca5a5', // Peach Glow
    '#f0abfc', // Lilac Flush
    '#f9a8d4', // Cherry Blossom
    '#fdba74', // Apricot Hue
    '#fab1a0', // Coral Dust
  ],
};

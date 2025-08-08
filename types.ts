export enum MakeupCategory {
  Eyeshadow = 'eyeshadow',
  Lipstick = 'lipstick',
  Blush = 'blush'
}

export interface MakeupColors {
  [MakeupCategory.Eyeshadow]: string;
  [MakeupCategory.Lipstick]: string;
  [MakeupCategory.Blush]: string;
}

export interface MakeupIdea {
  name: string;
  description: string;
  eyeshadowColor: string;
  lipstickColor: string;
  blushColor: string;
}
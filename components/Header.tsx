import React from 'react';
import { SparkleIcon } from './SparkleIcon';

export const Header = (): React.ReactNode => {
  return (
    <header className="py-6 text-center">
      <h1 className="font-title text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center gap-3">
        <SparkleIcon className="w-8 h-8 text-pink-400" />
        Fairy Princess Makeup
        <SparkleIcon className="w-8 h-8 text-purple-400" />
      </h1>
      <p className="mt-2 text-lg text-gray-600">Design your dream fairy look!</p>
    </header>
  );
};
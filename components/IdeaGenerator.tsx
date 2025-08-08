import React from 'react';
import type { MakeupIdea } from '../types';
import { SparkleIcon } from './SparkleIcon';

interface IdeaGeneratorProps {
  onGenerate: () => void;
  idea: MakeupIdea | null;
  isLoading: boolean;
  error: string | null;
}

export const IdeaGenerator = ({ onGenerate, idea, isLoading, error }: IdeaGeneratorProps): React.ReactNode => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-bold text-purple-500 mb-4">AI Magic Muse</h3>
      <button
        onClick={onGenerate}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            <span>Creating...</span>
          </>
        ) : (
          <>
            <SparkleIcon className="w-6 h-6" />
            <span>Generate an Idea</span>
          </>
        )}
      </button>

      <div className="mt-5 w-full min-h-[100px] bg-purple-50 p-4 rounded-lg border-2 border-dashed border-purple-200 flex items-center justify-center">
        {error && <p className="text-red-500 font-medium">{error}</p>}
        {!error && idea && (
          <div className="text-left">
            <h4 className="font-bold text-lg text-purple-800">{idea.name}</h4>
            <p className="text-gray-600">{idea.description}</p>
          </div>
        )}
        {!error && !idea && !isLoading && (
            <p className="text-gray-500">Click the button to get a magical idea!</p>
        )}
      </div>
    </div>
  );
};
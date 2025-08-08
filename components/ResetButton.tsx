import React from 'react';

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton = ({ onClick }: ResetButtonProps): React.ReactNode => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        className="bg-gray-200 text-gray-700 font-semibold py-2 px-5 rounded-lg hover:bg-gray-300 transition-colors duration-200"
      >
        Reset Makeup
      </button>
    </div>
  );
};
import React from "react";

const TerminalText = ({ typedText }) => {
  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-3xl">
        <div className="whitespace-pre-line text-green-400">
          {typedText}
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalText;

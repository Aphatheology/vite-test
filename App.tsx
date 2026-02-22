import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { setupAi } from './services/aiService';

const App: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-sans text-white gap-4">
      <div className="flex items-center gap-2">
        <AlertCircle className="w-8 h-8 text-red-500" />
        <span>Testing API Keys exposure</span>
      </div>
      <button 
        onClick={setupAi}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors border border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
      >
        Setup AI
      </button>
    </div>
  );
};

export default App;
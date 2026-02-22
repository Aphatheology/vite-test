import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-sans text-white">
      <AlertCircle className="w-8 h-8 text-red-500" />
      Testing API Keys exposure
    </div>
  );
};

export default App;
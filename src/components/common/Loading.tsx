import React from 'react';
import { Truck } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <div className="relative">
        <Truck className="h-12 w-12 text-red-600 animate-bounce" />
        <div className="absolute inset-0 h-12 w-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-600 text-lg">{message}</p>
    </div>
  );
};

export default Loading;
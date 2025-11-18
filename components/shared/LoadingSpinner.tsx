
import React from 'react';

const LoadingSpinner: React.FC<{ message?: string }> = ({ message = "Analisando Documentos..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-md">
      <div className="w-12 h-12 border-4 border-t-4 border-slate-200 border-t-sky-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-slate-700">{message}</p>
      <p className="mt-1 text-sm text-slate-500">A IA está processando os arquivos. Isso pode levar alguns instantes.</p>
    </div>
  );
};

export default LoadingSpinner;

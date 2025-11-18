
import React, { useState } from 'react';
import { PresentationChartLineIcon } from '../icons/IconComponents';

const steps = [
    'Resultados de Auditoria',
    'Ações Corretivas',
    'Indicadores de Desempenho',
    'Análise de Riscos',
    'Plano de Ação (PAINT)',
    'Gerar Relatório Final'
];

const RelatorioAnual: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-6">
                <PresentationChartLineIcon className="w-6 h-6 mr-3 text-slate-500" />
                Assistente de Geração do Relatório Anual de Atividades
            </h3>
            
            <ol className="flex items-center w-full text-sm font-medium text-center text-slate-500 mb-8">
                {steps.map((step, index) => (
                     <li key={step} className={`flex md:w-full items-center ${index <= currentStep ? 'text-sky-600' : ''} ${index < steps.length -1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10" : ""}`}>
                        <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 mr-2 text-xs border ${index <= currentStep ? 'bg-sky-100 border-sky-600' : 'border-slate-300'}`}>
                           {index < currentStep ? '✔' : index + 1}
                        </span>
                        <span>{step}</span>
                    </li>
                ))}
            </ol>

            <div className="text-center p-8 border-2 border-dashed rounded-lg">
                <h4 className="font-bold text-slate-800">Etapa: {steps[currentStep]}</h4>
                <p className="text-slate-600 mt-2">Dados sendo consolidados do respectivo módulo...</p>
                {/* Placeholder for actual content of each step */}
            </div>

            <div className="flex justify-between mt-8">
                <button 
                    onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
                    disabled={currentStep === 0}
                    className="px-6 py-2 bg-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-300 disabled:opacity-50"
                >
                    Anterior
                </button>
                 <button 
                    onClick={() => setCurrentStep(s => Math.min(steps.length - 1, s + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 disabled:opacity-50"
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default RelatorioAnual;

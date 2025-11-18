
import React from 'react';
import { DocumentCheckIcon } from '../icons/IconComponents';

const ParecerAnual: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <DocumentCheckIcon className="w-6 h-6 mr-3 text-slate-500" />
                Parecer Anual (Contas do Prefeito)
            </h3>
            <p className="text-sm text-slate-600 mb-4">
                Consolidação das informações para emissão do parecer sobre as contas anuais do Chefe do Executivo.
            </p>
            <div className="flex-grow space-y-3">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">✔</div>
                    <p className="text-sm text-slate-700">Relatórios de Auditoria Finalizados: 12/15</p>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm mr-3">✔</div>
                    <p className="text-sm text-slate-700">Relatórios de Corregedoria Compilados: 4/4</p>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-sm mr-3">!</div>
                    <p className="text-sm text-slate-700">Pendências de Recomendações: 3</p>
                </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-slate-600 text-white font-semibold rounded-md hover:bg-slate-700 transition-colors text-sm">
                Iniciar Consolidação do Parecer
            </button>
        </div>
    );
};

export default ParecerAnual;

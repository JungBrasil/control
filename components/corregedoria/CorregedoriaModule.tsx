
import React, { useState } from 'react';
import { GavelIcon, HandshakeIcon, LifebuoyIcon } from '../icons/IconComponents';
import ProcessosDisciplinares from './ProcessosDisciplinares';
import TomadaContasEspecial from './TomadaContasEspecial';
import MonitoramentoRecomendacoes from './MonitoramentoRecomendacoes';

type Submodule = 'pad' | 'tce' | 'recomendacoes';

const CorregedoriaModule: React.FC = () => {
    const [activeSubmodule, setActiveSubmodule] = useState<Submodule>('pad');

    const submodules = [
        { id: 'pad', name: 'Processos Disciplinares', icon: GavelIcon },
        { id: 'tce', name: 'Tomada de Contas Especial', icon: LifebuoyIcon },
        { id: 'recomendacoes', name: 'Monitoramento de Recomendações', icon: HandshakeIcon },
    ];

    const renderSubmodule = () => {
        switch (activeSubmodule) {
            case 'pad': return <ProcessosDisciplinares />;
            case 'tce': return <TomadaContasEspecial />;
            case 'recomendacoes': return <MonitoramentoRecomendacoes />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Coordenadoria de Corregedoria e Processos</h2>
                <p className="mt-1 text-slate-600">Acompanhamento de processos disciplinares e apuração de responsabilidades.</p>

                <div className="mt-6 border-b border-slate-200">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto">
                        {submodules.map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => setActiveSubmodule(sub.id as Submodule)}
                                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center
                  ${activeSubmodule === sub.id
                                        ? 'border-sky-500 text-sky-600'
                                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                    }`}
                            >
                                <sub.icon className="w-5 h-5 mr-2" />
                                {sub.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="animate-fade-in">
                {renderSubmodule()}
            </div>
        </div>
    );
};

export default CorregedoriaModule;

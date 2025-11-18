
import React, { useState } from 'react';
import { MegaphoneIcon, InformationCircleIcon, PresentationChartLineIcon, LightBulbIcon } from '../icons/IconComponents';
import OuvidoriaManifestacoes from './OuvidoriaManifestacoes';
import AcessoInformacao from './AcessoInformacao';
import TransparenciaAtiva from './TransparenciaAtiva';
import ControleSocial from './ControleSocial';

type Submodule = 'manifestacoes' | 'esic' | 'transparencia' | 'social';

const OuvidoriaModule: React.FC = () => {
    const [activeSubmodule, setActiveSubmodule] = useState<Submodule>('manifestacoes');

    const submodules = [
        { id: 'manifestacoes', name: 'Ouvidoria (Manifestações)', icon: MegaphoneIcon },
        { id: 'esic', name: 'Acesso à Informação (e-SIC)', icon: InformationCircleIcon },
        { id: 'transparencia', name: 'Transparência Ativa', icon: PresentationChartLineIcon },
        { id: 'social', name: 'Fomento ao Controle Social', icon: LightBulbIcon },
    ];

    const renderSubmodule = () => {
        switch (activeSubmodule) {
            case 'manifestacoes': return <OuvidoriaManifestacoes />;
            case 'esic': return <AcessoInformacao />;
            case 'transparencia': return <TransparenciaAtiva />;
            case 'social': return <ControleSocial />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Coordenadoria de Ouvidoria e Transparência</h2>
                <p className="mt-1 text-slate-600">Canais de participação social e acesso à informação.</p>

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

export default OuvidoriaModule;

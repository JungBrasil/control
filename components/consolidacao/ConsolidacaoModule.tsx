
import React, { useState } from 'react';
import { AcademicCapIcon, PresentationChartLineIcon, ShareIcon, CpuChipIcon } from '../icons/IconComponents';
import CapacitacaoDesempenho from './CapacitacaoDesempenho';
import RelatorioAnual from './RelatorioAnual';
import CooperacaoExterna from './CooperacaoExterna';
import FomentoSIAFIC from './FomentoSIAFIC';

type Submodule = 'capacitacao' | 'relatorio' | 'cooperacao' | 'siafic';

const ConsolidacaoModule: React.FC = () => {
    const [activeSubmodule, setActiveSubmodule] = useState<Submodule>('relatorio');

    const submodules = [
        { id: 'capacitacao', name: 'Capacitação e Desempenho', icon: AcademicCapIcon },
        { id: 'relatorio', name: 'Relatório Anual de Atividades', icon: PresentationChartLineIcon },
        { id: 'cooperacao', name: 'Cooperação Externa (TCE/MP)', icon: ShareIcon },
        { id: 'siafic', name: 'Fomento SIAFIC', icon: CpuChipIcon },
    ];

    const renderSubmodule = () => {
        switch (activeSubmodule) {
            case 'capacitacao': return <CapacitacaoDesempenho />;
            case 'relatorio': return <RelatorioAnual />;
            case 'cooperacao': return <CooperacaoExterna />;
            case 'siafic': return <FomentoSIAFIC />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800">Consolidação e Relações Institucionais</h2>
                <p className="mt-1 text-slate-600">Gestão de desempenho, capacitação e cooperação institucional.</p>

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

export default ConsolidacaoModule;


import React, { useState } from 'react';
import { BookOpenIcon, ChartPieIcon, UserGroupIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '../icons/IconComponents';
import Normatizacao from './Normatizacao';
import PlanejamentoAnual from './PlanejamentoAnual';
import GestaoCarreira from './GestaoCarreira';
import IntegridadeCompliance from './IntegridadeCompliance';
import EticaConflito from './EticaConflito';

type Submodule = 'normatizacao' | 'paint' | 'carreira' | 'integridade' | 'etica';

const GabineteModule: React.FC = () => {
  const [activeSubmodule, setActiveSubmodule] = useState<Submodule>('normatizacao');

  const submodules = [
    { id: 'normatizacao', name: 'Normatização e Biblioteca', icon: BookOpenIcon },
    { id: 'paint', name: 'Planejamento Anual (PAINT)', icon: ChartPieIcon },
    { id: 'carreira', name: 'Gestão da Carreira (SCI)', icon: UserGroupIcon },
    { id: 'integridade', name: 'Integridade e Compliance', icon: ShieldCheckIcon },
    { id: 'etica', name: 'Ética e Conflito de Interesses', icon: ExclamationTriangleIcon },
  ];

  const renderSubmodule = () => {
    switch (activeSubmodule) {
      case 'normatizacao': return <Normatizacao />;
      case 'paint': return <PlanejamentoAnual />;
      case 'carreira': return <GestaoCarreira />;
      case 'integridade': return <IntegridadeCompliance />;
      case 'etica': return <EticaConflito />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Gabinete do Controlador-Geral</h2>
        <p className="mt-1 text-slate-600">Planejamento, Integridade e Gestão Interna da CGM.</p>
        
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
                <sub.icon className="w-5 h-5 mr-2"/> 
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

export default GabineteModule;

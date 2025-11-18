
import React from 'react';
import AnaliseContratacoes from './AnaliseContratacoes';
import AnaliseParcerias from './AnaliseParcerias';
import MonitoramentoFiscal from './MonitoramentoFiscal';
import ExecucaoAuditorias from './ExecucaoAuditorias';
import ParecerAnual from './ParecerAnual';

const AuditoriaModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Coordenadoria de Auditoria e Fiscalização</h2>
        <p className="mt-1 text-slate-600">Ferramentas para garantir a conformidade e eficiência dos atos da gestão.</p>
      </div>
      
      <AnaliseContratacoes />
      <AnaliseParcerias />
      <MonitoramentoFiscal />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ExecucaoAuditorias />
        <ParecerAnual />
      </div>

    </div>
  );
};

export default AuditoriaModule;

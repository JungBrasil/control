
import React from 'react';
import { GavelIcon } from '../icons/IconComponents';

const mockPADs = [
  { id: 'PAD 001/25', tipo: 'PAD', interessado: 'Servidor A', comissao: 'Port. 123/25', instauracao: '15/02/2025', prazo: '15/04/2025', status: 'Instrução' },
  { id: 'SIND 005/25', tipo: 'Sindicância', interessado: 'Servidor B', comissao: 'Port. 140/25', instauracao: '10/03/2025', prazo: '09/04/2025', status: 'Defesa' },
  { id: 'PAD 020/24', tipo: 'PAD', interessado: 'Servidor C', comissao: 'Port. 450/24', instauracao: '01/11/2024', prazo: '30/12/2024', status: 'Relatório Final' },
];

const ProcessosDisciplinares: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
        <GavelIcon className="w-6 h-6 mr-3 text-slate-500" />
        Processos Disciplinares (PAD/Sindicância)
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Processo</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Interessado</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Prazo Final</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fase Atual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {mockPADs.map(pad => (
              <tr key={pad.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-semibold text-sky-700">{pad.id}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{pad.tipo}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{pad.interessado}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{pad.prazo}</td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {pad.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessosDisciplinares;

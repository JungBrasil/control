
import React from 'react';
import { ClipboardDocumentListIcon } from '../icons/IconComponents';

const mockOS = [
  { id: 'OS-001/25', objeto: 'Verificação de conformidade da Folha de Pagamento', equipe: 'Carlos, Ana', inicio: '01/03/2025', fim: '31/03/2025', status: 'Em Execução' },
  { id: 'OS-002/25', objeto: 'Inspeção física no Almoxarifado Central', equipe: 'João', inicio: '15/04/2025', fim: '18/04/2025', status: 'Planejada' },
  { id: 'OS-015/24', objeto: 'Auditoria dos contratos de publicidade de 2023', equipe: 'Carlos', inicio: '01/11/2024', fim: '15/12/2024', status: 'Concluída' },
];

const ExecucaoAuditorias: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full">
      <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
        <ClipboardDocumentListIcon className="w-6 h-6 mr-3 text-slate-500" />
        Execução de Auditorias e Inspeções
      </h3>
       <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">OS</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Objeto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {mockOS.map(os => (
              <tr key={os.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-semibold text-sky-700">{os.id}</td>
                <td className="px-4 py-3 text-sm text-slate-600 max-w-xs truncate">{os.objeto}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    os.status === 'Concluída' ? 'bg-green-100 text-green-800' : 
                    os.status === 'Em Execução' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {os.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
       <button className="mt-4 w-full px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors text-sm">
          Nova Ordem de Serviço
        </button>
    </div>
  );
};

export default ExecucaoAuditorias;

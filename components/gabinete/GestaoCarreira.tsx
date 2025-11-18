
import React from 'react';
import { UserGroupIcon } from '../icons/IconComponents';

const mockServidores = [
  { id: 1, nome: 'Carlos Silva', cargo: 'Auditor de Controle Interno - Nível III', status: 'Ativo', certificacoes: 'CPA-10, CGE' },
  { id: 2, nome: 'Ana Pereira', cargo: 'Auditor de Controle Interno - Nível II', status: 'Ativo', certificacoes: 'MROSC Expert' },
  { id: 3, nome: 'João Costa', cargo: 'Técnico de Controle Interno', status: 'Ativo', certificacoes: '' },
  { id: 4, nome: 'Mariana Lima', cargo: 'Auditor de Controle Interno - Nível I', status: 'Férias', certificacoes: 'Lei 14.133/21' },
];

const GestaoCarreira: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
        <UserGroupIcon className="w-6 h-6 mr-3 text-slate-500" />
        Servidores da Carreira de Controle Interno
      </h3>
       <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nome</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Cargo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Certificações Relevantes</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {mockServidores.map((servidor) => (
              <tr key={servidor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{servidor.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{servidor.cargo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{servidor.certificacoes || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      servidor.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {servidor.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-sky-600 hover:text-sky-900">Ver Perfil</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestaoCarreira;

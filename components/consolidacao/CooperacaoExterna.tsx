
import React from 'react';
import { ShareIcon } from '../icons/IconComponents';

const mockComunicacoes = [
  { id: 1, protocolo: 'CI-CGM-015/25', orgao: 'Tribunal de Contas (TCE)', assunto: 'Encaminhamento Relatório TCE 010/24', data: '20/01/2025' },
  { id: 2, protocolo: 'CI-CGM-021/25', orgao: 'Ministério Público (MP)', assunto: 'Representação por indícios de improbidade (PAD 020/24)', data: '15/02/2025' },
];

const CooperacaoExterna: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <ShareIcon className="w-6 h-6 mr-3 text-slate-500" />
                Protocolo de Cooperação Externa (TCE/MP)
            </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Protocolo</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Órgão de Destino</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Assunto</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Data</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {mockComunicacoes.map(item => (
                            <tr key={item.id} className="hover:bg-slate-50">
                                <td className="px-4 py-3 text-sm font-semibold text-sky-700">{item.protocolo}</td>
                                <td className="px-4 py-3 text-sm text-slate-600">{item.orgao}</td>
                                <td className="px-4 py-3 text-sm text-slate-600 max-w-md truncate">{item.assunto}</td>
                                <td className="px-4 py-3 text-sm text-slate-600">{item.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <button className="mt-4 w-full sm:w-auto px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors text-sm">
                Nova Comunicação
            </button>
        </div>
    );
};

export default CooperacaoExterna;

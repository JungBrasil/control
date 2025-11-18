
import React from 'react';
import { InformationCircleIcon } from '../icons/IconComponents';

const mockLAI = [
    { id: '202500123', solicitante: 'Cidadão A', data: '12/03/2025', prazo: '01/04/2025', status: 'Respondido' },
    { id: '202500124', solicitante: 'Cidadão B', data: '14/03/2025', prazo: '03/04/2025', status: 'Em Tramitação' },
    { id: '202500125', solicitante: 'Cidadão C', data: '15/03/2025', prazo: '04/04/2025', status: 'Atrasado' },
];

const AcessoInformacao: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <InformationCircleIcon className="w-6 h-6 mr-3 text-slate-500" />
                Pedidos de Acesso à Informação (e-SIC)
            </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Protocolo</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Solicitante</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Data do Pedido</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Prazo Final</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {mockLAI.map(item => (
                            <tr key={item.id} className="hover:bg-slate-50">
                                <td className="px-4 py-3 text-sm font-semibold text-sky-700">{item.id}</td>
                                <td className="px-4 py-3 text-sm text-slate-600">{item.solicitante}</td>
                                <td className="px-4 py-3 text-sm text-slate-600">{item.data}</td>
                                <td className="px-4 py-3 text-sm text-slate-600">{item.prazo}</td>
                                <td className="px-4 py-3 text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        item.status === 'Respondido' ? 'bg-green-100 text-green-800' : 
                                        item.status === 'Atrasado' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {item.status}
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

export default AcessoInformacao;

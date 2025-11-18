
import React from 'react';
import { ExclamationTriangleIcon } from '../icons/IconComponents';

const mockDeclaracoes = [
    { id: 1, servidor: 'Carlos Silva', data: '10/01/2025', situacao: 'Cônjuge sócio de empresa que participa de licitações.', analise: 'Potencial Conflito', status: 'Em Análise' },
    { id: 2, servidor: 'Ana Pereira', data: '12/01/2025', situacao: 'Nenhuma situação de conflito a declarar.', analise: 'Sem Conflito', status: 'Arquivada' },
    { id: 3, servidor: 'João Costa', data: '11/01/2025', situacao: 'Nenhuma situação de conflito a declarar.', analise: 'Sem Conflito', status: 'Arquivada' },
];

const EticaConflito: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <ExclamationTriangleIcon className="w-6 h-6 mr-3 text-slate-500" />
                Declarações de Conflito de Interesses
            </h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Servidor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Data Declaração</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Situação Declarada</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Análise Preliminar</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        {mockDeclaracoes.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.servidor}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.data}</td>
                                <td className="px-6 py-4 whitespace-normal max-w-md text-sm text-slate-500">{item.situacao}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <span className={`${item.analise === 'Potencial Conflito' ? 'text-yellow-800' : 'text-green-800'}`}>
                                        {item.analise}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        item.status === 'Arquivada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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

export default EticaConflito;

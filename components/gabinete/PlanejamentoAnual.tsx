
import React from 'react';
import { ChartPieIcon } from '../icons/IconComponents';

const mockPaint = [
    { id: 1, area: "Folha de Pagamento", tipo: "Auditoria de Conformidade", auditor: "Carlos Silva", horas: 80, status: "Em andamento" },
    { id: 2, area: "Contratos de TI", tipo: "Auditoria Operacional", auditor: "Ana Pereira", horas: 120, status: "Planejada" },
    { id: 3, area: "Almoxarifado Central", tipo: "Inspeção Física", auditor: "João Costa", horas: 40, status: "Concluída" },
];

const PlanejamentoAnual: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                    <ChartPieIcon className="w-6 h-6 mr-3 text-slate-500" />
                    Ações do PAINT 2025
                </h3>
                 <div className="overflow-x-auto">
                    <table className="min-w-full bg-white divide-y divide-slate-200">
                         <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Área/Objeto</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo de Ação</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Auditor Líder</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Horas Previstas</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {mockPaint.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-4 text-sm font-medium text-slate-800">{item.area}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.tipo}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.auditor}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.horas}</td>
                                    <td className="px-4 py-4 text-sm">
                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            item.status === 'Concluída' ? 'bg-green-100 text-green-800' : 
                                            item.status === 'Em andamento' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
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
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Cadastrar Nova Ação</h3>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="area" className="block text-sm font-medium text-slate-700">Área/Objeto</label>
                        <input type="text" id="area" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="tipo" className="block text-sm font-medium text-slate-700">Tipo de Ação</label>
                        <select id="tipo" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white">
                            <option>Auditoria de Conformidade</option>
                            <option>Auditoria Operacional</option>
                            <option>Inspeção</option>
                            <option>Monitoramento</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="auditor" className="block text-sm font-medium text-slate-700">Auditor Líder</label>
                        <select id="auditor" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white">
                            <option>Carlos Silva</option>
                            <option>Ana Pereira</option>
                            <option>João Costa</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="horas" className="block text-sm font-medium text-slate-700">Horas Previstas</label>
                        <input type="number" id="horas" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors">
                        Adicionar ao PAINT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PlanejamentoAnual;


import React from 'react';
import { ShieldCheckIcon } from '../icons/IconComponents';

const mockRisks = [
    { area: "Licitações", risco: 0.9, impacto: "Alto", probabilidade: "Alta" },
    { area: "Contratos", risco: 0.7, impacto: "Alto", probabilidade: "Média" },
    { area: "Folha de Pag.", risco: 0.4, impacto: "Médio", probabilidade: "Baixa" },
    { area: "Almoxarifado", risco: 0.6, impacto: "Médio", probabilidade: "Alta" },
    { area: "Concessões", risco: 0.8, impacto: "Crítico", probabilidade: "Média" },
    { area: "Arrecadação", risco: 0.3, impacto: "Baixo", probabilidade: "Média" },
];

const mockActions = [
    { id: 1, action: "Treinamento sobre a Nova Lei de Licitações para fiscais de contrato.", responsavel: "CGM/SAD", prazo: "30/06/2025", status: "Em Andamento" },
    { id: 2, action: "Implementação de sistema de controle de estoque no Almoxarifado.", responsavel: "SAD", prazo: "31/08/2025", status: "Planejada" },
    { id: 3, action: "Publicação do novo Código de Ética dos Servidores.", responsavel: "CGM", prazo: "15/02/2025", status: "Concluída" },
]

const IntegridadeCompliance: React.FC = () => {

    const getRiskColor = (value: number) => {
        if (value > 0.75) return 'bg-red-500';
        if (value > 0.5) return 'bg-yellow-400';
        return 'bg-green-500';
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                    <ShieldCheckIcon className="w-6 h-6 mr-3 text-slate-500" />
                    Programa de Integridade
                </h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ação Proposta</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Responsável</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Prazo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                         <tbody className="bg-white divide-y divide-slate-200">
                            {mockActions.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-4 text-sm font-medium text-slate-800">{item.action}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.responsavel}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.prazo}</td>
                                    <td className="px-4 py-4 text-sm">
                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            item.status === 'Concluída' ? 'bg-green-100 text-green-800' : 
                                            item.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
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
             <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Mapa de Calor de Riscos</h3>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-white">
                    {mockRisks.sort((a,b) => b.risco - a.risco).map(risk => (
                        <div key={risk.area} className={`p-3 rounded flex items-center justify-center ${getRiskColor(risk.risco)}`}>
                            {risk.area}
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-around text-xs">
                    <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div> Baixo</span>
                    <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div> Médio</span>
                    <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div> Alto</span>
                </div>
            </div>
        </div>
    );
};

export default IntegridadeCompliance;

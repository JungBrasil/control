
import React from 'react';
import { PresentationChartLineIcon } from '../icons/IconComponents';

const InfoCard: React.FC<{ title: string; value: string; color: string }> = ({ title, value, color }) => (
    <div className={`p-4 rounded-lg shadow-sm border ${color}`}>
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
);

const TransparenciaAtiva: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <PresentationChartLineIcon className="w-6 h-6 mr-3 text-slate-500" />
                Indicadores de Transparência Ativa
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <InfoCard title="Despesa Empenhada (Ano)" value="R$ 85,2 M" color="border-blue-200 bg-blue-50" />
                <InfoCard title="Receita Realizada (Ano)" value="R$ 92,1 M" color="border-green-200 bg-green-50" />
                <InfoCard title="Contratos Ativos" value="128" color="border-yellow-200 bg-yellow-50" />
                <InfoCard title="Servidores Ativos" value="897" color="border-indigo-200 bg-indigo-50" />
            </div>
             <div className="mt-6">
                <h4 className="font-semibold text-slate-700 mb-2">Últimas Publicações no Portal</h4>
                <ul className="space-y-2 text-sm">
                    <li className="p-2 bg-slate-50 rounded-md">Relatório de Gestão Fiscal - 3º Quad/2024</li>
                    <li className="p-2 bg-slate-50 rounded-md">Contrato 035/2025 - Aquisição de Merenda Escolar</li>
                    <li className="p-2 bg-slate-50 rounded-md">Decreto 1.234/2025 - Nomeia Servidores</li>
                </ul>
             </div>
        </div>
    );
};

export default TransparenciaAtiva;

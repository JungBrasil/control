
import React from 'react';
import { AcademicCapIcon } from '../icons/IconComponents';

const InfoCard: React.FC<{ title: string; value: string; }> = ({ title, value }) => (
    <div className="p-4 rounded-lg shadow-sm border bg-slate-50 border-slate-200 text-center">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <p className="text-2xl font-bold text-sky-700">{value}</p>
    </div>
);

const mockCursos = [
    { id: 1, curso: 'Lei 14.133/2021 Avançada', parceiro: 'Escola de Governo', data: 'Maio/2025' },
    { id: 2, curso: 'Auditoria Baseada em Riscos', parceiro: 'TCE/MS', data: 'Julho/2025' },
];

const CapacitacaoDesempenho: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <AcademicCapIcon className="w-6 h-6 mr-3 text-slate-500" />
                Capacitação e Desempenho da CGM
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <InfoCard title="Recomendações Emitidas" value="45" />
                <InfoCard title="% de Cumprimento" value="82%" />
                <InfoCard title="Economia Gerada" value="R$ 1,2 M" />
                <InfoCard title="Horas de Capacitação" value="240h" />
            </div>
            <div>
                 <h4 className="font-semibold text-slate-700 mb-2">Programas de Capacitação Planejados</h4>
                 <div className="overflow-x-auto">
                    <table className="min-w-full bg-white divide-y divide-slate-200">
                         <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Curso/Evento</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Parceiro</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Previsão</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {mockCursos.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-4 text-sm font-medium text-slate-800">{item.curso}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.parceiro}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.data}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CapacitacaoDesempenho;

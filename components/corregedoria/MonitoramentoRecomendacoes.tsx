
import React from 'react';
import { HandshakeIcon } from '../icons/IconComponents';

const mockRecomendacoes = [
    { id: 'REC-001/25', origem: 'Relatório Auditoria OS-015/24', recomendacao: 'Realizar cotação de preços com no mínimo 5 fornecedores para publicidade.', prazo: '30/03/2025', status: 'Cumprida' },
    { id: 'REC-002/25', origem: 'TCE 010/24', recomendacao: 'Instalar câmeras de segurança no Almoxarifado Central.', prazo: '30/04/2025', status: 'Em Andamento' },
    { id: 'TAC-001/25', origem: 'Ministério Público', recomendacao: 'Adequar o Portal da Transparência à nova legislação.', prazo: '30/06/2025', status: 'Atrasada' },
];

const MonitoramentoRecomendacoes: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <HandshakeIcon className="w-6 h-6 mr-3 text-slate-500" />
                Monitoramento de Recomendações e TACs
            </h3>
            <div className="space-y-4">
                {mockRecomendacoes.map(rec => (
                    <div key={rec.id} className="p-4 border rounded-md bg-slate-50">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold text-sky-800">{rec.id}</p>
                                <p className="text-sm text-slate-700 mt-1">{rec.recomendacao}</p>
                                <p className="text-xs text-slate-500 mt-1">Origem: {rec.origem} | Prazo: {rec.prazo}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                                rec.status === 'Cumprida' ? 'bg-green-100 text-green-800' :
                                rec.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800' :
                                'bg-red-100 text-red-800'
                            }`}>
                                {rec.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonitoramentoRecomendacoes;

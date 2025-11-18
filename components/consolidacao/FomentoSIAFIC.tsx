
import React from 'react';
import { CpuChipIcon } from '../icons/IconComponents';

const sistemas = [
    { nome: 'Contabilidade', status: 'Integrado' },
    { nome: 'Tesouraria', status: 'Integrado' },
    { nome: 'Arrecadação', status: 'Integrado' },
    { nome: 'Compras e Licitações', status: 'Em Andamento' },
    { nome: 'Contratos', status: 'Em Andamento' },
    { nome: 'Pessoal', status: 'Integrado' },
    { nome: 'Patrimônio', status: 'Planejado' },
    { nome: 'Frota', status: 'Não Iniciado' },
];

const FomentoSIAFIC: React.FC = () => {
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Integrado': return 'bg-green-100 text-green-800';
            case 'Em Andamento': return 'bg-yellow-100 text-yellow-800';
            case 'Planejado': return 'bg-blue-100 text-blue-800';
            default: return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
             <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <CpuChipIcon className="w-6 h-6 mr-3 text-slate-500" />
                Status da Integração de Sistemas (SIAFIC)
            </h3>
            <p className="text-sm text-slate-600 mb-4">
                Acompanhamento da adesão e integração dos sistemas informatizados de gestão pública, garantindo o acesso irrestrito do controle interno.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sistemas.map(sys => (
                    <div key={sys.nome} className="p-4 border rounded-lg text-center">
                        <p className="font-bold text-slate-800">{sys.nome}</p>
                        <span className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(sys.status)}`}>
                            {sys.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FomentoSIAFIC;

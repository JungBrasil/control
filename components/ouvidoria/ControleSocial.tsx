
import React from 'react';
import { LightBulbIcon } from '../icons/IconComponents';

const mockMateriais = [
    { title: 'Cartilha: Como Acompanhar os Gastos da Prefeitura', tipo: 'PDF', link: '#' },
    { title: 'Guia: Entendendo a Lei de Acesso à Informação (LAI)', tipo: 'PDF', link: '#' },
    { title: 'Vídeo: O Papel do Controle Interno', tipo: 'Vídeo', link: '#' },
    { title: 'Infográfico: O Ciclo Orçamentário Municipal', tipo: 'Imagem', link: '#' },
];

const ControleSocial: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                <LightBulbIcon className="w-6 h-6 mr-3 text-slate-500" />
                Fomento ao Controle Social
            </h3>
            <p className="text-sm text-slate-600 mb-4">Materiais educativos para fomentar a cultura da integridade, da ética e da participação cidadã.</p>
            <div className="space-y-3">
                {mockMateriais.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-md border">
                        <div>
                            <p className="font-medium text-slate-800">{item.title}</p>
                            <p className="text-xs text-slate-500">{item.tipo}</p>
                        </div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sky-600 hover:text-sky-800 px-4 py-1.5 bg-sky-100 rounded-md">
                            Acessar
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ControleSocial;

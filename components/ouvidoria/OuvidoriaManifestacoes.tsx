import React, { useState } from 'react';
import { MegaphoneIcon, SparklesIcon } from '../icons/IconComponents';
import { improveManifestationText } from '../../services/geminiService';


const mockManifestacoes = [
    { id: '202503015', tipo: 'Reclamação', assunto: 'Buraco na Rua A', data: '15/03/2025', status: 'Encaminhada' },
    { id: '202503014', tipo: 'Denúncia', assunto: 'Uso de veículo oficial', data: '14/03/2025', status: 'Em Análise' },
    { id: '202503012', tipo: 'Sugestão', assunto: 'Coleta seletiva', data: '12/03/2025', status: 'Respondida' },
];

const OuvidoriaManifestacoes: React.FC = () => {
    const [descricao, setDescricao] = useState('');
    const [isImprovingText, setIsImprovingText] = useState(false);
    const [error, setError] = useState('');

    const handleImproveText = async () => {
        if (!descricao.trim()) {
            setError('Digite a descrição da manifestação primeiro.');
            return;
        }
        setError('');
        setIsImprovingText(true);
        try {
            const improvedText = await improveManifestationText(descricao);
            setDescricao(improvedText);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Falha ao melhorar o texto.');
        } finally {
            setIsImprovingText(false);
        }
    };


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                    <MegaphoneIcon className="w-6 h-6 mr-3 text-slate-500" />
                    Painel de Manifestações
                </h3>
                 <div className="overflow-x-auto">
                    <table className="min-w-full bg-white divide-y divide-slate-200">
                         <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Protocolo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Assunto</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Data</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {mockManifestacoes.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-4 text-sm font-medium text-sky-700">{item.id}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.tipo}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.assunto}</td>
                                    <td className="px-4 py-4 text-sm text-slate-600">{item.data}</td>
                                    <td className="px-4 py-4 text-sm">
                                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            item.status === 'Respondida' ? 'bg-green-100 text-green-800' : 
                                            item.status === 'Em Análise' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
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
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Registrar Manifestação</h3>
                <form className="space-y-4">
                     <div>
                        <label htmlFor="tipo" className="block text-sm font-medium text-slate-700">Tipo</label>
                        <select id="tipo" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white">
                            <option>Denúncia</option>
                            <option>Reclamação</option>
                            <option>Sugestão</option>
                            <option>Elogio</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="assunto" className="block text-sm font-medium text-slate-700">Assunto</label>
                        <input type="text" id="assunto" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
                    </div>
                     <div>
                         <div className="flex justify-between items-center mb-1">
                            <label htmlFor="descricao" className="block text-sm font-medium text-slate-700">Descrição</label>
                             <button type="button" onClick={handleImproveText} disabled={isImprovingText} className="flex items-center text-sm font-medium text-sky-600 hover:text-sky-800 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <SparklesIcon className="w-4 h-4 mr-1" />
                                    {isImprovingText ? 'Melhorando...' : 'Melhorar Texto com IA'}
                                </button>
                        </div>
                        <textarea id="descricao" rows={6} value={descricao} onChange={(e) => setDescricao(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"></textarea>
                         {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
                    </div>
                    <div className="flex items-center">
                        <input id="sigilo" type="checkbox" className="h-4 w-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500" />
                        <label htmlFor="sigilo" className="ml-2 block text-sm text-slate-900">Garantir sigilo do denunciante</label>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OuvidoriaManifestacoes;
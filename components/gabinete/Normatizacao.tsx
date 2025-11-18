import React, { useState } from 'react';
import { BookOpenIcon, SparklesIcon, XMarkIcon } from '../icons/IconComponents';
import { summarizeDocument } from '../../services/geminiService';

const initialNormas = [
  { id: 1, norma: 'IN CGM 001/2025', tipo: 'Instrução Normativa', publicacao: '15/01/2025', status: 'Em Vigor', resumo: 'Estabelece procedimentos para a elaboração do PAINT.' },
  { id: 2, norma: 'PORT CGM 005/2025', tipo: 'Portaria', publicacao: '02/02/2025', status: 'Em Vigor', resumo: 'Designa comissão de inventário de bens.' },
  { id: 3, norma: 'ORIENT CGM 001/2024', tipo: 'Orientação Técnica', publicacao: '20/11/2024', status: 'Revogada', resumo: 'Diretrizes sobre adiantamento de despesas.' },
  { id: 4, norma: 'IN CGM 002/2025', tipo: 'Instrução Normativa', publicacao: '10/03/2025', status: 'Em Vigor', resumo: 'Regulamenta o processo de Tomada de Contas Especial.' },
];

const NormaModal = ({ isOpen, onClose, onSave }: { isOpen: boolean; onClose: () => void; onSave: (norma: any) => void }) => {
    const [formData, setFormData] = useState({ norma: '', tipo: 'Instrução Normativa', publicacao: '', resumo: '' });
    const [documentoFile, setDocumentoFile] = useState<File | null>(null);
    const [isSummarizing, setIsSummarizing] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setDocumentoFile(e.target.files[0]);
            setError('');
        }
    };

    const handleGenerateSummary = async () => {
        if (!documentoFile) {
            setError('Por favor, anexe o documento da norma primeiro.');
            return;
        }
        setError('');
        setIsSummarizing(true);
        try {
            const summary = await summarizeDocument(documentoFile);
            setFormData(prev => ({ ...prev, resumo: summary }));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Falha ao gerar resumo.');
        } finally {
            setIsSummarizing(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newNorma = {
            id: Date.now(),
            status: 'Em Vigor',
            ...formData,
        };
        onSave(newNorma);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" aria-modal="true" role="dialog">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4 animate-fade-in-up">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold text-slate-800">Cadastrar Nova Norma</h3>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800"><XMarkIcon /></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="norma" className="block text-sm font-medium text-slate-700">Norma (Ex: IN 001/2025)</label>
                                <input type="text" name="norma" id="norma" value={formData.norma} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"/>
                            </div>
                            <div>
                                <label htmlFor="publicacao" className="block text-sm font-medium text-slate-700">Data de Publicação</label>
                                <input type="date" name="publicacao" id="publicacao" value={formData.publicacao} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="tipo" className="block text-sm font-medium text-slate-700">Tipo de Ato</label>
                            <select name="tipo" id="tipo" value={formData.tipo} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 bg-white">
                                <option>Instrução Normativa</option>
                                <option>Portaria</option>
                                <option>Orientação Técnica</option>
                                <option>Decreto</option>
                                <option>Resolução</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="documento" className="block text-sm font-medium text-slate-700">Anexar Documento</label>
                            <input type="file" name="documento" id="documento" onChange={handleFileChange} accept=".pdf,.doc,.docx,.txt" className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"/>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label htmlFor="resumo" className="block text-sm font-medium text-slate-700">Resumo</label>
                                <button type="button" onClick={handleGenerateSummary} disabled={!documentoFile || isSummarizing} className="flex items-center text-sm font-medium text-sky-600 hover:text-sky-800 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <SparklesIcon className="w-4 h-4 mr-1" />
                                    {isSummarizing ? 'Gerando...' : 'Gerar Resumo com IA'}
                                </button>
                            </div>
                            <textarea name="resumo" id="resumo" rows={4} value={formData.resumo} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"></textarea>
                            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
                        </div>
                    </div>
                    <div className="flex justify-end items-center p-4 bg-slate-50 border-t rounded-b-lg">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-300 mr-3">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700">Salvar Norma</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Normatizacao: React.FC = () => {
    const [normas, setNormas] = useState(initialNormas);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveNorma = (newNormaData: any) => {
        const formattedNorma = {
            ...newNormaData,
            publicacao: newNormaData.publicacao.split('-').reverse().join('/'),
        };
        setNormas(prev => [formattedNorma, ...prev]);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                    <BookOpenIcon className="w-6 h-6 mr-3 text-slate-500" />
                    Normatização e Biblioteca
                </h3>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Pesquisar por norma, tipo ou palavra-chave..."
                        className="flex-grow px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors"
                    >
                        Nova Norma
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Norma</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tipo</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Publicação</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Resumo</th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Ações</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {normas.map((norma) => (
                                <tr key={norma.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{norma.norma}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{norma.tipo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{norma.publicacao}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${norma.status === 'Em Vigor' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {norma.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-normal text-sm text-slate-500 max-w-xs">{norma.resumo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-sky-600 hover:text-sky-900">Ver</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <NormaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveNorma} />
        </>
    );
};

export default Normatizacao;
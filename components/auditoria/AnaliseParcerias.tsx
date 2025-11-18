import React, { useState, useEffect } from 'react';
import FileUpload from '../shared/FileUpload';
import LoadingSpinner from '../shared/LoadingSpinner';
import { analyzePartnershipDocuments } from '../../services/geminiService';
import { PartnershipAnalysisResult, PartnershipChecklistItem, PartnershipHistoryItem } from '../../types';
import { ClockIcon, UsersIcon } from '../icons/IconComponents';

const statusStyles: Record<PartnershipChecklistItem['status'], string> = {
    'Conforme': 'bg-green-100 text-green-800',
    'Não Conforme': 'bg-red-100 text-red-800',
    'Atenção': 'bg-yellow-100 text-yellow-800',
};

const AnaliseParcerias: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<PartnershipAnalysisResult | null>(null);
    const [history, setHistory] = useState<PartnershipHistoryItem[]>([]);
    const [selectedHistoryItem, setSelectedHistoryItem] = useState<PartnershipHistoryItem | null>(null);

    useEffect(() => {
        try {
            const storedHistory = localStorage.getItem('scm-partnership-history');
            if (storedHistory) {
                setHistory(JSON.parse(storedHistory));
            }
        } catch (e) {
            console.error("Failed to load or parse partnership history from localStorage.", e);
            localStorage.removeItem('scm-partnership-history');
        }
    }, []);

    const handleAnalyze = async () => {
        if (files.length === 0) {
            setError('Por favor, selecione ao menos um documento para análise.');
            return;
        }
        setError(null);
        setIsLoading(true);
        setResult(null);
        setSelectedHistoryItem(null);

        try {
            const analysisResult = await analyzePartnershipDocuments(files);
            setResult(analysisResult);
            
            const newHistoryItem: PartnershipHistoryItem = {
                id: Date.now(),
                date: new Date().toLocaleString('pt-BR'),
                files: files.map(f => f.name),
                analysisResult: analysisResult,
            };

            setHistory(prevHistory => {
                const updatedHistory = [newHistoryItem, ...prevHistory];
                localStorage.setItem('scm-partnership-history', JSON.stringify(updatedHistory));
                return updatedHistory;
            });

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewAnalysis = () => {
        setResult(null);
        setFiles([]);
        setError(null);
        setSelectedHistoryItem(null);
    };
    
    const handleViewHistoryItem = (item: PartnershipHistoryItem) => {
        setResult(item.analysisResult);
        setSelectedHistoryItem(item);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderResult = () => {
        if (!result) return null;
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 animate-fade-in">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-3">Resultado da Análise de Parceria</h3>
                
                <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-700 mb-4">Checklist de Conformidade</h4>
                    <div className="space-y-3">
                        {result.complianceChecklist.map((item, index) => (
                            <div key={index} className="p-4 rounded-md border bg-slate-50">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-slate-800">{item.item}</p>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusStyles[item.status]}`}>{item.status}</span>
                                </div>
                                <p className="mt-2 text-sm text-slate-600">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-4">Parecer de Formalização</h4>
                    <div className="space-y-6">
                         <div>
                            <h5 className="font-semibold text-slate-600 mb-2">Resumo da Análise</h5>
                            <p className="text-sm text-slate-700 bg-slate-100 p-3 rounded-md">{result.formalizationReport.summary}</p>
                        </div>
                         <div>
                            <h5 className="font-semibold text-slate-600 mb-2">Metas Extraídas</h5>
                             <ul className="list-disc list-inside space-y-2 pl-1">
                                {result.formalizationReport.extractedGoals.map((point, i) => <li key={i} className="text-sm text-slate-700">{point}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-600 mb-2">Indicadores Extraídos</h5>
                             <ul className="list-disc list-inside space-y-2 pl-1">
                                {result.formalizationReport.extractedIndicators.map((point, i) => <li key={i} className="text-sm text-slate-700">{point}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-600 mb-2">Análise Orçamentária</h5>
                            <p className="text-sm text-slate-700 bg-slate-100 p-3 rounded-md">{result.formalizationReport.budgetConsistency}</p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-green-600 mb-2">Recomendações</h5>
                             <ul className="list-disc list-inside space-y-2 pl-1">
                                {result.formalizationReport.recommendations.map((point, i) => <li key={i} className="text-sm text-green-700">{point}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderHistory = () => {
        if (history.length === 0) return null;
        return (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
                    <ClockIcon className="w-6 h-6 mr-3 text-slate-500" />
                    Histórico de Análises de Parcerias
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                     {history.map(item => (
                        <div key={item.id} className="p-3 rounded-md border bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between">
                            <div className="flex-1 mb-2 sm:mb-0 min-w-0">
                                <p className="font-semibold text-sm text-slate-800">{item.date}</p>
                                <p className="text-xs text-slate-500 mt-1 truncate" title={item.files.join(', ')}>
                                    {item.files.length} documento(s): {item.files.join(', ')}
                                </p>
                            </div>
                            <button
                                onClick={() => handleViewHistoryItem(item)}
                                className="text-sm font-medium text-sky-600 hover:text-sky-800 px-3 py-1 bg-sky-100 hover:bg-sky-200 rounded-md transition-colors flex-shrink-0"
                            >
                                Visualizar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                 <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                    <UsersIcon className="w-6 h-6 mr-3 text-slate-500" />
                    2.2 Análise de Parcerias (Terceiro Setor) com IA
                </h3>
                <p className="text-sm text-slate-600 mt-2 mb-6">
                   Faça o upload do Plano de Trabalho e Termo de Parceria para que a IA valide a conformidade e extraia os dados chave.
                </p>

                {isLoading ? (
                    <LoadingSpinner message="Analisando Parceria..." />
                ) : result ? (
                    <>
                        {renderResult()}
                        <button
                            onClick={handleNewAnalysis}
                            className="mt-6 w-full sm:w-auto px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-300"
                        >
                            Analisar Nova Parceria
                        </button>
                    </>
                ) : (
                    <div className="space-y-6">
                        <FileUpload onFilesSelected={setFiles} />
                        {error && <p className="text-sm text-red-600">{error}</p>}
                        <button
                            onClick={handleAnalyze}
                            disabled={files.length === 0 || isLoading}
                            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300"
                        >
                            Analisar Parceria com IA
                        </button>
                    </div>
                )}
            </div>

            {!isLoading && renderHistory()}
        </>
    );
};

export default AnaliseParcerias;
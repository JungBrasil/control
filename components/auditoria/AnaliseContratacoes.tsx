import React, { useState, useEffect } from 'react';
import FileUpload from '../shared/FileUpload';
import LoadingSpinner from '../shared/LoadingSpinner';
import { analyzeContractDocuments } from '../../services/geminiService';
import { AIAnalysisResult, ComplianceChecklistItem, HistoryItem } from '../../types';
import { ClockIcon, ExclamationTriangleIcon } from '../icons/IconComponents';

const statusStyles: Record<ComplianceChecklistItem['status'], string> = {
    'Conforme': 'bg-green-100 text-green-800',
    'Não Conforme': 'bg-red-100 text-red-800',
    'Atenção': 'bg-yellow-100 text-yellow-800',
};

const AnaliseContratacoes: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<AIAnalysisResult | null>(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [filteredHistory, setFilteredHistory] = useState<HistoryItem[]>([]);
    
    // Filter states
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [fileNameFilter, setFileNameFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        try {
            const storedHistory = localStorage.getItem('scm-analysis-history');
            if (storedHistory) {
                const parsedHistory = JSON.parse(storedHistory);
                setHistory(parsedHistory);
                setFilteredHistory(parsedHistory);
            }
        } catch (e) {
            console.error("Failed to load or parse history from localStorage.", e);
            localStorage.removeItem('scm-analysis-history');
        }
    }, []);

    useEffect(() => {
        const applyFilter = () => {
            let filtered = [...history];

            // 1. Date Filter
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;
            if (start) start.setHours(0, 0, 0, 0);
            if (end) end.setHours(23, 59, 59, 999);

            if (start || end) {
                filtered = filtered.filter(item => {
                    try {
                        const [datePart] = item.date.split(',');
                        const [day, month, year] = datePart.trim().split('/');
                        const itemDate = new Date(Number(year), Number(month) - 1, Number(day));
                        if (isNaN(itemDate.getTime())) return false;
                        if (start && itemDate < start) return false;
                        if (end && itemDate > end) return false;
                        return true;
                    } catch { return false; }
                });
            }

            // 2. File Name Filter
            if (fileNameFilter.trim()) {
                filtered = filtered.filter(item =>
                    item.files.some(file =>
                        file.toLowerCase().includes(fileNameFilter.trim().toLowerCase())
                    )
                );
            }

            // 3. Status Filter
            if (statusFilter !== 'all') {
                filtered = filtered.filter(item =>
                   item.analysisResult.complianceChecklist.some(check =>
                       check.status === statusFilter
                   )
               );
           }

            setFilteredHistory(filtered);
        };
        applyFilter();
    }, [startDate, endDate, fileNameFilter, statusFilter, history]);

    const handleAnalyze = async () => {
        if (files.length === 0) {
            setError('Por favor, selecione ao menos um documento para análise.');
            return;
        }
        setError(null);
        setIsLoading(true);
        setResult(null);

        try {
            const analysisResult = await analyzeContractDocuments(files);
            setResult(analysisResult);
            
            const newHistoryItem: HistoryItem = {
                id: Date.now(),
                date: new Date().toLocaleString('pt-BR'),
                files: files.map(f => f.name),
                analysisResult: analysisResult,
            };

            setHistory(prevHistory => {
                const updatedHistory = [newHistoryItem, ...prevHistory];
                localStorage.setItem('scm-analysis-history', JSON.stringify(updatedHistory));
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
    };
    
    const handleViewHistoryItem = (item: HistoryItem) => {
        setResult(item.analysisResult);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const clearFilters = () => {
        setStartDate('');
        setEndDate('');
        setFileNameFilter('');
        setStatusFilter('all');
    };

    const renderResult = () => {
        if (!result) return null;
        const hasInconsistencies = result.preliminaryReport.inconsistencies.length > 0;
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 animate-fade-in">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-3">Resultado da Análise de IA</h3>
                
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
                    <h4 className="text-lg font-semibold text-slate-700 mb-4">Parecer Preliminar de Análise</h4>
                    <div className="space-y-6">
                        <div id="summary">
                            <h5 className="font-semibold text-slate-600 mb-2">Resumo da Análise</h5>
                            <p className="text-sm text-slate-700 bg-slate-100 p-3 rounded-md">{result.preliminaryReport.summary}</p>
                        </div>
                         <div id="attentionPoints">
                            <h5 className="font-semibold text-slate-600 mb-2">Pontos de Atenção</h5>
                             <ul className="list-disc list-inside space-y-2 pl-1">
                                {result.preliminaryReport.attentionPoints.map((point, i) => <li key={i} className="text-sm text-slate-700">{point}</li>)}
                            </ul>
                        </div>
                        {hasInconsistencies && (
                            <div id="inconsistencies" className="p-4 rounded-md border bg-red-50 border-red-200">
                                <h5 className="font-semibold text-red-700 mb-2 flex items-center">
                                    <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                                    Inconsistências Detectadas
                                </h5>
                                <ul className="list-disc list-inside space-y-2 pl-1">
                                    {result.preliminaryReport.inconsistencies.map((point, i) => <li key={i} className="text-sm text-red-800">{point}</li>)}
                                </ul>
                            </div>
                        )}
                        <div id="recommendations">
                            <h5 className="font-semibold text-green-600 mb-2">Recomendações de Saneamento</h5>
                             <ul className="list-disc list-inside space-y-2 pl-1">
                                {result.preliminaryReport.recommendations.map((point, i) => <li key={i} className="text-sm text-green-700">{point}</li>)}
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
                    Histórico de Análises
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-end gap-4 mb-4 p-3 bg-slate-50 rounded-md border">
                    <div>
                        <label htmlFor="start-date" className="block text-xs font-medium text-slate-600 mb-1">De:</label>
                        <input
                            type="date"
                            id="start-date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-2 py-1.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="end-date" className="block text-xs font-medium text-slate-600 mb-1">Até:</label>
                        <input
                            type="date"
                            id="end-date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-2 py-1.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <label htmlFor="file-name-filter" className="block text-xs font-medium text-slate-600 mb-1">Nome do Arquivo:</label>
                        <input
                            type="text"
                            id="file-name-filter"
                            value={fileNameFilter}
                            onChange={(e) => setFileNameFilter(e.target.value)}
                            placeholder="Pesquisar em arquivos..."
                            className="w-full px-2 py-1.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <label htmlFor="status-filter" className="block text-xs font-medium text-slate-600 mb-1">Status de Conformidade:</label>
                        <select
                            id="status-filter"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full px-2 py-1.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-white"
                        >
                            <option value="all">Todos</option>
                            <option value="Conforme">Conforme</option>
                            <option value="Não Conforme">Não Conforme</option>
                            <option value="Atenção">Atenção</option>
                        </select>
                    </div>
                    <div className="lg:col-span-2">
                        <button
                            onClick={clearFilters}
                            className="w-full px-4 py-1.5 bg-slate-200 text-slate-700 font-medium rounded-md hover:bg-slate-300 transition-colors text-sm"
                            aria-label="Limpar todos os filtros"
                        >
                            Limpar Filtros
                        </button>
                    </div>
                </div>


                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                     {filteredHistory.length > 0 ? (
                        filteredHistory.map(item => {
                            const inconsistencyCount = item.analysisResult.preliminaryReport.inconsistencies.length;
                            const hasInconsistencies = inconsistencyCount > 0;
                            
                            return (
                                <div key={item.id} className="p-3 rounded-md border bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between">
                                    <div className="flex-1 mb-2 sm:mb-0 min-w-0">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <p className="font-semibold text-sm text-slate-800">{item.date}</p>
                                            {hasInconsistencies && (
                                                <span className="inline-flex items-center text-xs font-semibold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                                                    <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
                                                    {inconsistencyCount} {inconsistencyCount > 1 ? 'Inconsistências' : 'Inconsistência'}
                                                </span>
                                            )}
                                        </div>
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
                            )
                        })
                     ) : (
                        <div className="text-center py-4 text-sm text-slate-500">
                            Nenhuma análise encontrada para os filtros selecionados.
                        </div>
                     )}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800">2.1 Análise de Contratações (Lei 14.133/2021) com IA</h3>
                <p className="text-sm text-slate-600 mt-2 mb-6">
                    Faça o upload dos artefatos da fase preparatória (DFD, ETP, TR, etc.) para que a IA realize uma análise de conformidade e gere um parecer preliminar.
                </p>

                {isLoading ? (
                    <LoadingSpinner />
                ) : result ? (
                    <>
                        {renderResult()}
                        <button
                            onClick={handleNewAnalysis}
                            className="mt-6 w-full sm:w-auto px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-300"
                        >
                            Iniciar Nova Análise
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
                            Analisar com IA
                        </button>
                    </div>
                )}
            </div>

            {!isLoading && renderHistory()}
        </>
    );
};

export default AnaliseContratacoes;
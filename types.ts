export type ModuleType = 'Gabinete' | 'Auditoria' | 'Corregedoria' | 'Ouvidoria' | 'Consolidacao';

export interface ModuleInfo {
  id: ModuleType;
  name: string;
  description: string;
}

// Types for Contract Analysis
export interface ComplianceChecklistItem {
  item: string;
  status: 'Conforme' | 'Não Conforme' | 'Atenção';
  details: string;
}

export interface PreliminaryReport {
  summary: string;
  attentionPoints: string[];
  inconsistencies: string[];
  recommendations: string[];
}

export interface AIAnalysisResult {
  complianceChecklist: ComplianceChecklistItem[];
  preliminaryReport: PreliminaryReport;
}

export interface HistoryItem {
  id: number;
  date: string;
  files: string[];
  analysisResult: AIAnalysisResult;
}


// Types for Partnership (Third Sector) Analysis
export interface PartnershipChecklistItem {
    item: string;
    status: 'Conforme' | 'Não Conforme' | 'Atenção';
    details: string;
}

export interface PartnershipFormalizationReport {
    summary: string;
    extractedGoals: string[];
    extractedIndicators: string[];
    budgetConsistency: string;
    recommendations: string[];
}

export interface PartnershipAnalysisResult {
    complianceChecklist: PartnershipChecklistItem[];
    formalizationReport: PartnershipFormalizationReport;
}

export interface PartnershipHistoryItem {
  id: number;
  date: string;
  files: string[];
  analysisResult: PartnershipAnalysisResult;
}


// Generic Part type for Gemini API
export interface Part {
  inlineData: {
    mimeType: string;
    data: string;
  };
}
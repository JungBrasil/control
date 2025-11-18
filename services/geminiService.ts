import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult, Part, PartnershipAnalysisResult } from '../types';

const fileToGenerativePart = async (file: File): Promise<Part> => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      } else {
        resolve('');
      }
    };
    reader.readAsDataURL(file);
  });
  const data = await base64EncodedDataPromise;
  return {
    inlineData: {
      mimeType: file.type,
      data,
    },
  };
};

export const analyzeContractDocuments = async (files: File[]): Promise<AIAnalysisResult> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
      Você é um auditor especialista do Sistema de Controle Interno de um município brasileiro, com profundo conhecimento da Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos). Sua tarefa é realizar uma análise preliminar e automatizada dos documentos da fase preparatória de uma contratação pública.

      Analise os documentos fornecidos (DFD, ETP, Termo de Referência, Mapa de Riscos, Formação de Preço, etc.) com base nos seguintes critérios:
      1.  **Legalidade e Justificativa:** A necessidade da contratação (DFD) está bem fundamentada e alinhada ao interesse público?
      2.  **Viabilidade e Soluções:** O Estudo Técnico Preliminar (ETP) explora soluções adequadas e demonstra a viabilidade da escolhida?
      3.  **Especificações Técnicas:** O Termo de Referência (TR) possui especificações claras, precisas e que não restrinjam indevidamente a competição?
      4.  **Gerenciamento de Riscos:** O Mapa de Riscos identifica as ameaças relevantes e propõe medidas de mitigação adequadas?
      5.  **Formação de Preço:** A pesquisa de preços parece consistente e há indícios de sobrepreço ou superfaturamento?
      6.  **Consistência Cruzada:** Existem inconsistências ou contradições entre as informações apresentadas nos diferentes documentos?

      Com base na sua análise, retorne um objeto JSON estruturado.
    `;
    
    const imageParts: Part[] = await Promise.all(files.map(fileToGenerativePart));

    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: { parts: [{ text: prompt }, ...imageParts] },
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    complianceChecklist: {
                        type: Type.ARRAY,
                        description: "Lista de verificação de conformidade dos itens analisados.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                item: { type: Type.STRING, description: "O critério de conformidade avaliado." },
                                status: { type: Type.STRING, description: "Status da conformidade: 'Conforme', 'Não Conforme' ou 'Atenção'." },
                                details: { type: Type.STRING, description: "Breve justificativa ou observação sobre o status." }
                            },
                            required: ["item", "status", "details"],
                        }
                    },
                    preliminaryReport: {
                        type: Type.OBJECT,
                        description: "Parecer preliminar estruturado com os achados da análise.",
                        properties: {
                            summary: { type: Type.STRING, description: "Resumo executivo da análise dos documentos." },
                            attentionPoints: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Pontos que exigem atenção ou esclarecimento, mas não são irregularidades graves." },
                            inconsistencies: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Inconsistências ou irregularidades detectadas que precisam de saneamento." },
                            recommendations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Recomendações de medidas corretivas para o gestor." }
                        },
                        required: ["summary", "attentionPoints", "inconsistencies", "recommendations"],
                    }
                },
                required: ["complianceChecklist", "preliminaryReport"]
            }
        }
    });

    try {
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);
        return result as AIAnalysisResult;
    } catch (e) {
        console.error("Failed to parse Gemini response as JSON:", response.text);
        throw new Error("A resposta da IA não está no formato JSON esperado.");
    }
};

export const analyzePartnershipDocuments = async (files: File[]): Promise<PartnershipAnalysisResult> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
      Você é um auditor especialista do Sistema de Controle Interno, com foco em parcerias com o Terceiro Setor (Lei nº 13.019/2014 - MROSC). Sua tarefa é analisar a documentação de formalização de uma parceria (Termo de Fomento/Colaboração, Plano de Trabalho, etc.).

      Analise os documentos com base nos seguintes critérios:
      1.  **Objeto e Justificativa:** O objeto da parceria é claro, de interesse público e a justificativa é pertinente?
      2.  **Metas e Indicadores:** O Plano de Trabalho contém metas claras, mensuráveis e alcançáveis? Os indicadores de acompanhamento são adequados?
      3.  **Cronograma Físico-Financeiro:** O cronograma de execução das atividades e dos desembolsos é realista e consistente?
      4.  **Orçamento:** Os custos apresentados no Plano de Trabalho são compatíveis com os preços de mercado e adequados ao objeto?
      5.  **Conformidade Geral:** A proposta geral está em conformidade com as diretrizes do MROSC e do edital de chamamento público, se aplicável?

      Sua análise deve extrair as informações chave e, ao final, retornar um objeto JSON estruturado.
    `;
    
    const fileParts: Part[] = await Promise.all(files.map(fileToGenerativePart));

    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: { parts: [{ text: prompt }, ...fileParts] },
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    complianceChecklist: {
                        type: Type.ARRAY,
                        description: "Lista de verificação de conformidade da parceria.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                item: { type: Type.STRING, description: "O critério de conformidade avaliado." },
                                status: { type: Type.STRING, description: "Status: 'Conforme', 'Não Conforme' ou 'Atenção'." },
                                details: { type: Type.STRING, description: "Observação sobre o status." }
                            },
                            required: ["item", "status", "details"],
                        }
                    },
                    formalizationReport: {
                        type: Type.OBJECT,
                        description: "Parecer de formalização da parceria.",
                        properties: {
                            summary: { type: Type.STRING, description: "Resumo da análise da proposta de parceria." },
                            extractedGoals: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista das principais metas extraídas do Plano de Trabalho." },
                            extractedIndicators: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista dos indicadores de acompanhamento extraídos." },
                            budgetConsistency: { type: Type.STRING, description: "Análise breve sobre a consistência e razoabilidade do orçamento." },
                            recommendations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Recomendações para aprovação, aprovação com ressalvas ou rejeição." }
                        },
                        required: ["summary", "extractedGoals", "extractedIndicators", "budgetConsistency", "recommendations"],
                    }
                },
                required: ["complianceChecklist", "formalizationReport"]
            }
        }
    });

    try {
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);
        return result as PartnershipAnalysisResult;
    } catch (e) {
        console.error("Failed to parse Gemini response as JSON:", response.text);
        throw new Error("A resposta da IA não está no formato JSON esperado.");
    }
};


export const summarizeDocument = async (file: File): Promise<string> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
      Você é um assistente de controladoria especializado em legislação municipal. Sua tarefa é ler o documento normativo em anexo (pode ser uma Portaria, Instrução Normativa, Decreto, etc.) e criar um resumo conciso e claro em um único parágrafo. O resumo deve capturar o objetivo principal da norma, a quem se aplica e qual a sua principal determinação. O texto deve ser direto e informativo, ideal para ser exibido em um catálogo de normas.
    `;
    
    const filePart: Part = await fileToGenerativePart(file);

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: { parts: [{ text: prompt }, filePart] },
    });
    
    return response.text.trim();
};

export const improveManifestationText = async (text: string): Promise<string> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
      Você é um assistente da ouvidoria de um órgão público. Sua tarefa é reescrever o texto a seguir para que ele se torne mais claro, objetivo e formal, mantendo o sentido original da manifestação do cidadão. Remova linguagem ofensiva, gírias ou excesso de emoção, mas preserve a essência da reclamação, denúncia ou sugestão. O texto final deve ser adequado para um registro oficial.

      Texto original: "${text}"

      Texto aprimorado:
    `;
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    
    return response.text.trim();
}
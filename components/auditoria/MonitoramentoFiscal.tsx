
import React from 'react';
import { BanknotesIcon } from '../icons/IconComponents';

const Gauge: React.FC<{ label: string; value: number; max: number; unit: string; limit: number; type: 'percent' | 'value' }> = ({ label, value, max, unit, limit, type }) => {
  const percentage = (value / max) * 100;
  const isAlert = value > limit;
  const color = isAlert ? 'bg-red-500' : 'bg-green-500';
  const limitPosition = (limit / max) * 100;

  return (
    <div className="text-center">
      <p className="font-semibold text-slate-700">{label}</p>
      <div className="relative w-full bg-slate-200 rounded-full h-6 mt-2">
        <div className={`h-6 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
        <div 
          className="absolute top-0 h-full border-r-2 border-dashed border-slate-600" 
          style={{ left: `${limitPosition}%` }}
          title={`Limite Prudencial: ${limit}${unit}`}
        ></div>
      </div>
      <p className={`mt-1 text-sm font-bold ${isAlert ? 'text-red-600' : 'text-slate-800'}`}>
        {type === 'percent' ? value.toFixed(2) : value}
        {unit}
      </p>
      <p className="text-xs text-slate-500">Limite: {limit}{unit}</p>
    </div>
  );
};

const MonitoramentoFiscal: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-6">
        <BanknotesIcon className="w-6 h-6 mr-3 text-slate-500" />
        Monitoramento dos Limites da LRF (3º Quadrimestre/2024)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Gauge 
          label="Despesa com Pessoal"
          value={52.8} 
          max={60}
          unit="%"
          limit={51.3} // Limite Prudencial
          type="percent"
        />
        <Gauge 
          label="Dívida Consolidada Líquida"
          value={85}
          max={120}
          unit="%"
          limit={108} // Limite Prudencial
          type="percent"
        />
        <Gauge 
          label="Operações de Crédito"
          value={12.5}
          max={16}
          unit="%"
          limit={14.4} // Limite Prudencial
          type="percent"
        />
      </div>
    </div>
  );
};

export default MonitoramentoFiscal;

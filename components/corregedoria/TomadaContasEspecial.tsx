
import React from 'react';
import { LifebuoyIcon } from '../icons/IconComponents';

const mockTCEs = [
  { id: 'TCE 001/25', fato: 'Dano ao veículo oficial placa ABC-1234', responsavel: 'Servidor X', valor: 'R$ 5.400,00', status: 'Apuração' },
  { id: 'TCE 002/25', fato: 'Omissão no dever de prestar contas de adiantamento', responsavel: 'Servidor Y', valor: 'R$ 2.000,00', status: 'Citação' },
  { id: 'TCE 010/24', fato: 'Desvio de bens do almoxarifado', responsavel: 'A apurar', valor: 'R$ 15.800,00', status: 'Relatório Final' },
];

const TomadaContasEspecial: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 flex items-center mb-4">
        <LifebuoyIcon className="w-6 h-6 mr-3 text-slate-500" />
        Tomada de Contas Especial (TCE)
      </h3>
       <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Processo</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fato Gerador</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Valor do Dano</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {mockTCEs.map(tce => (
              <tr key={tce.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-semibold text-sky-700">{tce.id}</td>
                <td className="px-4 py-3 text-sm text-slate-600 max-w-sm truncate">{tce.fato}</td>
                <td className="px-4 py-3 text-sm text-red-700 font-medium">{tce.valor}</td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {tce.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TomadaContasEspecial;

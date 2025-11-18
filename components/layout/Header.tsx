
import React from 'react';
import { ModuleType } from '../../types';

interface HeaderProps {
  activeModule: ModuleType;
}

const moduleNames: Record<ModuleType, string> = {
    Gabinete: 'Gabinete do Controlador-Geral',
    Auditoria: 'Coordenadoria de Auditoria e Fiscalização',
    Corregedoria: 'Coordenadoria de Corregedoria e Processos',
    Ouvidoria: 'Coordenadoria de Ouvidoria e Transparência',
    Consolidacao: 'Consolidação e Relações Institucionais'
};

const Header: React.FC<HeaderProps> = ({ activeModule }) => {
  return (
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">
        {moduleNames[activeModule] || 'Dashboard'}
      </h1>
      <div>
        {/* Placeholder for actions or user menu */}
      </div>
    </header>
  );
};

export default Header;

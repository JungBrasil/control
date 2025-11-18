
import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import { ModuleType } from './types';
import GabineteModule from './components/gabinete/GabineteModule';
import AuditoriaModule from './components/auditoria/AuditoriaModule';
import CorregedoriaModule from './components/corregedoria/CorregedoriaModule';
import OuvidoriaModule from './components/ouvidoria/OuvidoriaModule';
import ConsolidacaoModule from './components/consolidacao/ConsolidacaoModule';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('Gabinete');

  const renderModule = () => {
    switch (activeModule) {
      case 'Gabinete':
        return <GabineteModule />;
      case 'Auditoria':
        return <AuditoriaModule />;
      case 'Corregedoria':
        return <CorregedoriaModule />;
      case 'Ouvidoria':
        return <OuvidoriaModule />;
      case 'Consolidacao':
        return <ConsolidacaoModule />;
      default:
        return <GabineteModule />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeModule={activeModule} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 sm:p-6 lg:p-8">
          {renderModule()}
        </main>
      </div>
    </div>
  );
};

export default App;

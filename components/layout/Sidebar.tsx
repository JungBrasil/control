
import React from 'react';
import { ModuleType } from '../../types';
import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
} from '../icons/IconComponents';

interface SidebarProps {
  activeModule: ModuleType;
  setActiveModule: (module: ModuleType) => void;
}

const modules = [
  { id: 'Gabinete', name: 'Gabinete', icon: <BriefcaseIcon /> },
  { id: 'Auditoria', name: 'Auditoria', icon: <MagnifyingGlassIcon /> },
  { id: 'Corregedoria', name: 'Corregedoria', icon: <ScaleIcon /> },
  { id: 'Ouvidoria', name: 'Ouvidoria', icon: <ChatBubbleLeftRightIcon /> },
  { id: 'Consolidacao', name: 'Consolidação', icon: <DocumentChartBarIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ activeModule, setActiveModule }) => {
  return (
    <nav className="w-20 lg:w-64 bg-slate-800 text-white flex flex-col transition-all duration-300">
      <div className="flex items-center justify-center lg:justify-start lg:pl-6 h-20 border-b border-slate-700">
        <div className="bg-slate-50 text-slate-800 p-2 rounded-md">
            <ScaleIcon />
        </div>
        <h1 className="hidden lg:block ml-4 text-xl font-bold">SCM</h1>
      </div>
      <ul className="flex-1 mt-6">
        {modules.map((module) => (
          <li key={module.id} className="px-3 lg:px-4">
            <button
              onClick={() => setActiveModule(module.id as ModuleType)}
              className={`flex items-center w-full p-3 my-1 rounded-lg transition-colors duration-200 ${
                activeModule === module.id
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {module.icon}
              <span className="hidden lg:inline ml-4 font-medium">{module.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center justify-center lg:justify-start">
            <img className="h-10 w-10 rounded-full" src="https://picsum.photos/100" alt="User Avatar"/>
            <div className="hidden lg:block ml-4">
                <p className="font-semibold text-sm">Auditor Chefe</p>
                <p className="text-xs text-slate-400">CGM Amambai/MS</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

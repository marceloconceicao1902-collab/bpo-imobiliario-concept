'use client';

import React from 'react';
import { SystemView } from '@/lib/types';
import { Layout, Building, ShieldCheck } from 'lucide-react';

interface ViewSwitcherProps {
  currentView: SystemView;
  onViewChange: (view: SystemView) => void;
}

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="inline-flex items-center p-1 bg-concept-dark/90 border border-concept-border rounded-full shadow-inner">
      <button
        onClick={() => onViewChange('LANDING')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
          currentView === 'LANDING'
            ? 'bg-concept-blue text-white shadow-glow-blue'
            : 'text-concept-muted hover:text-white hover:bg-concept-slate/50'
        }`}
      >
        <Layout className="w-3.5 h-3.5" />
        <span>Visão 1: Landing Page</span>
      </button>

      <button
        onClick={() => onViewChange('PORTAL')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
          currentView === 'PORTAL'
            ? 'bg-concept-accent text-concept-dark shadow-glow-cyan'
            : 'text-concept-muted hover:text-white hover:bg-concept-slate/50'
        }`}
      >
        <Building className="w-3.5 h-3.5" />
        <span>Visão 2: Portal Imobiliária</span>
      </button>

      <button
        onClick={() => onViewChange('CRM')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
          currentView === 'CRM'
            ? 'bg-purple-600 text-white shadow-lg'
            : 'text-concept-muted hover:text-white hover:bg-concept-slate/50'
        }`}
      >
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Visão 3: CRM & Operação BPO</span>
      </button>
    </div>
  );
};

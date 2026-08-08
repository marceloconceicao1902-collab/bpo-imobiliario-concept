'use client';

import React from 'react';
import { SystemView } from '@/lib/types';
import { ViewSwitcher } from './ViewSwitcher';
import { Building2, PhoneCall, UserCheck, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  currentView: SystemView;
  onViewChange: (view: SystemView) => void;
  onOpenLeadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange, onOpenLeadModal }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-concept-border bg-concept-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo Concept Gestão */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewChange('LANDING')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-concept-blue via-concept-accent to-emerald-400 p-0.5 shadow-glow-cyan flex items-center justify-center">
            <div className="w-full h-full bg-concept-dark rounded-[10px] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-concept-accent" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">CONCEPT</span>
              <span className="font-semibold text-xl tracking-tight text-concept-accent">GESTÃO</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-medium text-concept-muted block -mt-1">
              BPO Financeiro Imobiliário
            </span>
          </div>
        </div>

        {/* Central View Switcher */}
        <div className="hidden lg:flex items-center">
          <ViewSwitcher currentView={currentView} onViewChange={onViewChange} />
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {currentView === 'LANDING' && (
            <>
              <button
                onClick={() => onViewChange('PORTAL')}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-concept-muted hover:text-white px-3 py-2 rounded-lg hover:bg-concept-slate/50 transition-colors"
              >
                <UserCheck className="w-4 h-4 text-concept-accent" />
                <span>Portal do Cliente</span>
              </button>
              <button
                onClick={onOpenLeadModal}
                className="glow-cyan-button px-4 py-2 rounded-lg text-xs flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Solicitar Proposta</span>
              </button>
            </>
          )}

          {currentView === 'PORTAL' && (
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <span className="text-xs font-bold text-white block">Novo Lar Imóveis</span>
                <span className="text-[10px] text-concept-accent">Plano Empresa B (Ativo)</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-concept-accent/20 border border-concept-accent/50 flex items-center justify-center text-concept-accent font-bold text-xs">
                NL
              </div>
            </div>
          )}

          {currentView === 'CRM' && (
            <div className="flex items-center gap-2 bg-purple-950/60 border border-purple-800/50 px-3 py-1.5 rounded-lg">
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              <div className="text-xs">
                <span className="text-white font-semibold block">Mesa BPO Interna</span>
                <span className="text-[10px] text-purple-300">Modo Master Operacional</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile View Switcher Sub-bar */}
      <div className="lg:hidden px-4 py-2 border-t border-concept-border/50 bg-concept-slate/40 flex justify-center">
        <ViewSwitcher currentView={currentView} onViewChange={onViewChange} />
      </div>
    </header>
  );
};

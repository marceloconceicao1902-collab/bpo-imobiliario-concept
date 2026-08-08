'use client';

import React from 'react';
import { UserRole } from '@/lib/types';
import { Building2, UserCheck, PhoneCall, LogOut } from 'lucide-react';

interface HeaderProps {
  userRole: UserRole;
  userName?: string;
  userCompany?: string;
  onOpenAuthModal: (role?: 'CLIENT' | 'ADMIN') => void;
  onLogout?: () => void;
  onOpenLeadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  userRole,
  userName,
  userCompany,
  onOpenAuthModal,
  onLogout,
  onOpenLeadModal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-concept-border bg-concept-dark/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo Concept Gestão */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => (onLogout ? onLogout() : null)}>
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

        {/* Anchor Navigation Links for Public LP */}
        {userRole === 'GUEST' && (
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-concept-muted">
            <a href="#solucoes" className="hover:text-concept-accent transition-colors">
              Soluções
            </a>
            <a href="#calculadora" className="hover:text-concept-accent transition-colors">
              Calculadora
            </a>
            <a href="#planos" className="hover:text-concept-accent transition-colors">
              Planos & Preços
            </a>
            <a href="#faq" className="hover:text-concept-accent transition-colors">
              FAQ
            </a>
          </nav>
        )}

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {userRole === 'GUEST' && (
            <>
              {/* Clean "Portal do Cliente" Button -> Triggers Auth Modal */}
              <button
                onClick={() => onOpenAuthModal('CLIENT')}
                className="flex items-center gap-2 text-xs font-bold text-white bg-concept-slate hover:bg-concept-card border border-concept-border px-4 py-2.5 rounded-xl transition-all shadow-md hover:border-concept-accent/40"
              >
                <UserCheck className="w-4 h-4 text-concept-accent" />
                <span>Portal do Cliente</span>
              </button>

              <button
                onClick={onOpenLeadModal}
                className="glow-cyan-button px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Solicitar Proposta</span>
              </button>
            </>
          )}

          {userRole === 'CLIENT' && (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-xs font-bold text-white block">{userCompany || 'Novo Lar Imóveis'}</span>
                <span className="text-[10px] text-concept-accent font-semibold">Cliente Logado • Plano Empresa B</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-concept-accent/20 border border-concept-accent/50 flex items-center justify-center text-concept-accent font-bold text-xs">
                NL
              </div>
              <button
                onClick={onLogout}
                title="Sair do Portal"
                className="p-2 rounded-xl bg-concept-slate hover:bg-rose-950/60 border border-concept-border hover:border-rose-500/50 text-concept-muted hover:text-rose-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}

          {userRole === 'ADMIN' && (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-xs font-bold text-white block">{userName || 'Analista BPO Master'}</span>
                <span className="text-[10px] text-purple-300 font-mono">Modo Master Operacional</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-500/60 flex items-center justify-center text-purple-300 font-bold text-xs">
                ADM
              </div>
              <button
                onClick={onLogout}
                title="Sair da Operação"
                className="p-2 rounded-xl bg-concept-slate hover:bg-rose-950/60 border border-concept-border hover:border-rose-500/50 text-concept-muted hover:text-rose-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

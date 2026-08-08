'use client';

import React, { useState, useId } from 'react';
import { UserRole } from '@/lib/types';
import { Building2, ShieldCheck, Lock, Mail, ArrowRight, Sparkles, CheckCircle2, User, Key } from 'lucide-react';

interface AuthModalProps {
  initialRole?: 'CLIENT' | 'ADMIN';
  onLoginSuccess: (role: 'CLIENT' | 'ADMIN', userDetails: { name: string; email: string; company?: string }) => void;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  initialRole = 'CLIENT',
  onLoginSuccess,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'CLIENT' | 'ADMIN'>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const emailInputId = useId();
  const passwordInputId = useId();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Por favor, preencha o e-mail e a senha.');
      return;
    }

    if (activeTab === 'CLIENT') {
      onLoginSuccess('CLIENT', {
        name: 'Carlos Eduardo Silveira',
        email: email,
        company: 'Imobiliária Novo Lar Ltda',
      });
    } else {
      onLoginSuccess('ADMIN', {
        name: 'Ana Paula Souza (Analista BPO Master)',
        email: email,
        company: 'Concept Gestão BPO',
      });
    }
  };

  const handleQuickDemoLogin = (role: 'CLIENT' | 'ADMIN') => {
    if (role === 'CLIENT') {
      setEmail('carlos@novolarimoveis.com.br');
      setPassword('••••••••');
      onLoginSuccess('CLIENT', {
        name: 'Carlos Eduardo Silveira',
        email: 'carlos@novolarimoveis.com.br',
        company: 'Imobiliária Novo Lar Ltda',
      });
    } else {
      setEmail('admin@conceptgestao.com.br');
      setPassword('••••••••');
      onLoginSuccess('ADMIN', {
        name: 'Ana Paula Souza (Analista BPO Master)',
        email: 'admin@conceptgestao.com.br',
        company: 'Concept Gestão BPO',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-concept-dark/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-concept-accent/40 max-w-md w-full text-left space-y-6 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-concept-muted hover:text-white text-xs font-bold w-8 h-8 rounded-full bg-concept-slate border border-concept-border flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-concept-blue via-concept-accent to-emerald-400 p-0.5 mx-auto shadow-glow-cyan flex items-center justify-center">
            <div className="w-full h-full bg-concept-dark rounded-[14px] flex items-center justify-center">
              {activeTab === 'CLIENT' ? (
                <Building2 className="w-6 h-6 text-concept-accent" />
              ) : (
                <ShieldCheck className="w-6 h-6 text-purple-400" />
              )}
            </div>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            {activeTab === 'CLIENT' ? 'Portal do Cliente Imobiliária' : 'Acesso Restrito BPO Operacional'}
          </h3>
          <p className="text-xs text-concept-muted">
            {activeTab === 'CLIENT'
              ? 'Acompanhe as rotinas financeiras, repasses e conciliação em tempo real.'
              : 'Painel Master para analistas e gestores da Concept Gestão.'}
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="flex rounded-xl bg-concept-dark p-1 border border-concept-border">
          <button
            onClick={() => {
              setActiveTab('CLIENT');
              setErrorMsg('');
            }}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'CLIENT'
                ? 'bg-concept-accent text-concept-dark shadow-glow-cyan'
                : 'text-concept-muted hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Imobiliária Logada</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('ADMIN');
              setErrorMsg('');
            }}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'ADMIN'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-concept-muted hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin / Operação BPO</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs text-rose-300">
              {errorMsg}
            </div>
          )}

          <div>
            <label htmlFor={emailInputId} className="text-xs font-semibold text-concept-muted block mb-1">
              E-mail de Acesso
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
              <input
                id={emailInputId}
                type="email"
                required
                placeholder={activeTab === 'CLIENT' ? 'carlos@imobiliaria.com.br' : 'admin@conceptgestao.com.br'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor={passwordInputId} className="text-xs font-semibold text-concept-muted block mb-1">
              Senha de Segurança
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
              <input
                id={passwordInputId}
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'CLIENT' ? 'glow-cyan-button' : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg'
            }`}
          >
            <span>Autenticar e Acessar Sistema</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Demo Login Preset Buttons for easy testing */}
        <div className="pt-3 border-t border-concept-border/60 text-center space-y-2">
          <span className="text-[11px] font-mono text-concept-accent uppercase tracking-wider font-bold block flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atalho para Avaliadores (Login Rápido 1-Clique)</span>
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleQuickDemoLogin('CLIENT')}
              className="px-3 py-2 rounded-xl bg-concept-dark hover:bg-concept-slate border border-concept-accent/40 text-[11px] text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Building2 className="w-3.5 h-3.5 text-concept-accent" />
              <span>Demo Imobiliária</span>
            </button>
            <button
              onClick={() => handleQuickDemoLogin('ADMIN')}
              className="px-3 py-2 rounded-xl bg-concept-dark hover:bg-concept-slate border border-purple-500/40 text-[11px] text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Demo Admin BPO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

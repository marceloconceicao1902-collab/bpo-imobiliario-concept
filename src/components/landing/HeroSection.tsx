'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenLeadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onOpenLeadModal }) => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-hero">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-concept-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-concept-blue/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-concept-slate/80 border border-concept-accent/30 text-concept-accent text-xs font-semibold shadow-glow-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retaguarda Financeira Especializada em Imobiliárias</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elimine o Caos Financeiro da sua Imobiliária com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-concept-accent via-emerald-300 to-cyan-400">
              BPO Especializado
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-concept-muted max-w-3xl mx-auto leading-relaxed">
            Processamos seus repasses a proprietários, contas a pagar, conciliação multi-contas e régua de cobrança de locatários com total transparência e precisão operacional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto glow-cyan-button px-8 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-3"
            >
              <span>Solicitar Proposta Personalizada</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-concept-slate/80 hover:bg-concept-slate border border-concept-border hover:border-concept-accent/50 transition-all flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-concept-accent" />
              <span>Simular Valor na Calculadora</span>
            </button>
          </div>

          {/* Trust bullets */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-concept-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-concept-accent" />
              <span>Conciliação Multi-Bancos Segregada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-concept-accent" />
              <span>Repasses com SLA Rigoroso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-concept-accent" />
              <span>Régua Ativa contra Inadimplência</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Container (WOW factor) */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-concept-accent via-concept-blue to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl bg-concept-dark border border-concept-border/80 shadow-2xl overflow-hidden">
            {/* Header window control bar */}
            <div className="bg-concept-slate/90 px-4 py-3 border-b border-concept-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-semibold text-concept-muted">
                  Painel de Controle BPO - Concept Gestão
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-concept-accent bg-concept-dark/60 px-3 py-1 rounded border border-concept-accent/20">
                <span className="w-2 h-2 rounded-full bg-concept-accent animate-pulse" />
                <span>SISTEMA ATIVO (ONLINE)</span>
              </div>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-concept-dark/95">
              {/* Card 1 */}
              <div className="p-4 rounded-xl bg-concept-slate/60 border border-concept-border">
                <span className="text-xs text-concept-muted block">Repasses Agendados</span>
                <span className="text-xl font-bold text-white block mt-1">R$ 215.400,00</span>
                <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>84 proprietários conciliados</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 rounded-xl bg-concept-slate/60 border border-concept-border">
                <span className="text-xs text-concept-muted block">A Pagar no Mês</span>
                <span className="text-xl font-bold text-white block mt-1">R$ 142.850,00</span>
                <div className="mt-2 text-[10px] text-concept-muted flex items-center gap-1">
                  <span>Condomínios & IPTUs em dia</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 rounded-xl bg-concept-slate/60 border border-concept-border">
                <span className="text-xs text-concept-muted block">Taxa de Inadimplência</span>
                <span className="text-xl font-bold text-concept-accent block mt-1">2.4%</span>
                <div className="mt-2 text-[10px] text-emerald-400 font-semibold">
                  -1.8% após régua BPO
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-4 rounded-xl bg-concept-slate/60 border border-concept-border">
                <span className="text-xs text-concept-muted block">Consumo do Plano</span>
                <div className="mt-1 flex items-center justify-between text-xs font-semibold text-white">
                  <span>382 / 450 movs</span>
                  <span className="text-concept-accent">85%</span>
                </div>
                <div className="w-full bg-concept-dark h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-concept-blue to-concept-accent h-full w-[85%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

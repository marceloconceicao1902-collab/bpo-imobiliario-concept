'use client';

import React from 'react';
import { VOLUME_TIERS, REVENUE_TIERS, ADD_ON_SERVICES } from '@/lib/constants';
import { Check, Sparkles, TrendingUp, ShieldCheck, PieChart, Cpu, Users, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-concept-accent" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-concept-blue" />,
  PieChart: <PieChart className="w-5 h-5 text-amber-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Users: <Users className="w-5 h-5 text-emerald-400" />,
  FileText: <FileText className="w-5 h-5 text-cyan-400" />,
};

interface PricingTablesProps {
  onSelectPlan: (planName: string, price: number) => void;
}

export const PricingTables: React.FC<PricingTablesProps> = ({ onSelectPlan }) => {
  return (
    <section className="py-20 bg-concept-slate/20 border-t border-concept-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-concept-accent block mb-2">
            Tabela Transparente de Preços
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Planos sem Letras Miúdas ou Surpresas
          </h2>
          <p className="mt-4 text-concept-muted text-sm sm:text-base">
            Tabela oficial Concept Gestão adaptada para o porte exato da sua operação imobiliária.
          </p>
        </div>

        {/* PRODUTO 1: Volume Tiers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-concept-blue" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              PRODUTO 1: BPO Financeiro Completo (Por Volume de Movimentações)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VOLUME_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="glass-card p-6 rounded-3xl border border-concept-border hover:border-concept-blue flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono text-concept-blue uppercase tracking-wider bg-concept-blue/10 px-3 py-1 rounded-full border border-concept-blue/30">
                      {tier.name}
                    </span>
                    {tier.id === 'empresa_b' && (
                      <span className="text-[10px] font-bold text-concept-accent bg-concept-accent/15 px-2.5 py-0.5 rounded-full border border-concept-accent/40 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> MAIS POPULAR
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span className="text-xs text-concept-muted block">Investimento Fixo Mensal</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm font-bold text-white">R$</span>
                      <span className="text-3xl font-extrabold text-white font-mono">
                        {tier.price.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-concept-muted">/mês</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-concept-dark/80 border border-concept-border text-xs text-concept-muted mb-6">
                    <span className="font-semibold text-white block mb-1">Regra de Excedente:</span>
                    <span>{tier.overageRule}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Contas a Pagar e Receber</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Emissão de NFs e Boletos Locação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Conciliação Bancária Multi-Contas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Relatórios de Repasse a Proprietários</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(tier.name, tier.price)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-concept-slate hover:bg-concept-blue hover:text-white text-white border border-concept-border transition-all"
                >
                  Contratar {tier.name.split(' ')[0]} {tier.name.split(' ')[1]}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUTO 2: Revenue Tiers */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-concept-accent" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              PRODUTO 2: Gestão de Recebíveis (Por Faturamento Mensal Gerido)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVENUE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="glass-card p-6 rounded-3xl border border-concept-border hover:border-concept-accent flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono text-concept-accent uppercase tracking-wider bg-concept-accent/10 px-3 py-1 rounded-full border border-concept-accent/30">
                      Plano {tier.name}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs text-concept-muted block">Investimento Fixo Mensal</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-sm font-bold text-white">R$</span>
                      <span className="text-3xl font-extrabold text-white font-mono">
                        {tier.price.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-concept-muted">/mês</span>
                    </div>
                  </div>

                  <p className="text-xs text-concept-muted mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Régua Ativa de Cobrança (WhatsApp/E-mail)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Gestão de Inadimplentes e Negociação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-concept-accent shrink-0" />
                      <span>Painel de Indicadores de Arrecadação</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(`Gestão de Recebíveis (${tier.name})`, tier.price)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-concept-slate hover:bg-concept-accent hover:text-concept-dark text-white border border-concept-border transition-all"
                >
                  Contratar Plano {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons / Serviços Especiais */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold text-white">
              Serviços Especiais & Add-ons (Sob Consulta)
            </h3>
            <p className="text-xs text-concept-muted mt-2">
              Soluções avançadas de controladoria, assessoria de CFO e integrações que aceleram o crescimento da sua imobiliária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADD_ON_SERVICES.map((addon) => (
              <div
                key={addon.id}
                className="p-5 rounded-2xl bg-concept-slate/40 border border-concept-border hover:border-concept-accent/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-concept-dark border border-concept-border flex items-center justify-center">
                    {iconMap[addon.iconName]}
                  </div>
                  <span className="text-[10px] font-bold font-mono text-concept-accent bg-concept-accent/10 px-2.5 py-0.5 rounded-full border border-concept-accent/30">
                    {addon.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{addon.title}</h4>
                <p className="text-xs text-concept-muted leading-relaxed mb-3">{addon.description}</p>
                <span className="text-[11px] font-semibold text-slate-300 font-mono block">
                  Modelo: {addon.priceModel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

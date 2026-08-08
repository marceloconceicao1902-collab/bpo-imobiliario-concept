'use client';

import React from 'react';
import { MOCK_BILLING_SUMMARY, MOCK_CLIENT_CONTRACTS } from '@/lib/mockData';
import { DollarSign, TrendingUp, AlertCircle, PieChart as PieIcon, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const BillingTab: React.FC = () => {
  const dreData = [
    { label: 'Faturamento Base Planos', valor: MOCK_BILLING_SUMMARY.baseRevenue },
    { label: 'Excedentes (R$ 300/faixa)', valor: MOCK_BILLING_SUMMARY.overageRevenue },
    { label: 'Custos Operacionais BPO', valor: MOCK_BILLING_SUMMARY.operatingCost },
    { label: 'Margem Líquida BPO', valor: MOCK_BILLING_SUMMARY.netMargin },
  ];

  return (
    <div className="space-y-6">
      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Faturamento Bruto Mês */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <span className="text-xs text-concept-muted block">Faturamento Bruto Mês</span>
          <div className="text-2xl font-extrabold font-mono text-white tracking-tight mt-1">
            R$ {MOCK_BILLING_SUMMARY.grossRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>42 imobiliárias ativas</span>
          </div>
        </div>

        {/* Card 2: Receita de Excedentes (R$ 300/faixa) */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <span className="text-xs text-concept-muted block">Excedentes Apurados (R$ 300)</span>
          <div className="text-2xl font-extrabold font-mono text-concept-accent tracking-tight mt-1">
            R$ {MOCK_BILLING_SUMMARY.overageRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 text-[11px] text-amber-300 font-semibold">
            {MOCK_BILLING_SUMMARY.overageCountBrackets} faixas estouradas no mês
          </div>
        </div>

        {/* Card 3: Margem Líquida BPO */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <span className="text-xs text-concept-muted block">Margem Líquida Operacional</span>
          <div className="text-2xl font-extrabold font-mono text-emerald-400 tracking-tight mt-1">
            R$ {MOCK_BILLING_SUMMARY.netMargin.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 text-[11px] text-emerald-400 font-semibold">
            64% de margem Ebitda
          </div>
        </div>

        {/* Card 4: Churn Rate */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <span className="text-xs text-concept-muted block">Churn Rate (Cancelamentos)</span>
          <div className="text-2xl font-extrabold font-mono text-white tracking-tight mt-1">
            {MOCK_BILLING_SUMMARY.churnRate}%
          </div>
          <div className="mt-2 text-[11px] text-emerald-400 font-semibold">
            Excelente retenção de carteira
          </div>
        </div>
      </div>

      {/* DRE Chart & Billing Rules Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* DRE Bar Chart */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-concept-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">DRE Interno da Operação BPO</h3>
              <p className="text-xs text-concept-muted">Demonstrativo de Resultado do Exercício - Concept Gestão</p>
            </div>
            <span className="text-xs font-mono text-concept-accent bg-concept-accent/10 px-2.5 py-1 rounded border border-concept-accent/30">
              {MOCK_BILLING_SUMMARY.referenceMonth}
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dreData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A365C" vertical={false} />
                <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} tickFormatter={(v) => `R$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#161F38', borderColor: '#2A365C', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(val: number) => [`R$ ${val.toLocaleString('pt-BR')}`, '']}
                />
                <Bar dataKey="valor" fill="#00E599" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Billing Table */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-concept-border flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-2">Regra de Cálculo de Excedente</h3>
            <p className="text-xs text-concept-muted mb-4 leading-relaxed">
              O sistema calcula automaticamente no último dia do mês a volumetria processada por cliente e adiciona R$ 300,00 a cada 100 lançamentos excedentes da franquia.
            </p>

            <div className="space-y-3">
              {MOCK_CLIENT_CONTRACTS.map((cli) => (
                <div key={cli.id} className="p-3 rounded-xl bg-concept-dark/80 border border-concept-border flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{cli.tradeName}</span>
                    <span className="text-[10px] text-concept-muted">{cli.volumeUsed} / {cli.volumeLimit} movs</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-white block">R$ {cli.totalMonthly}</span>
                    {cli.overageFee > 0 ? (
                      <span className="text-[10px] text-amber-400 font-mono">+ R$ {cli.overageFee} (excedente)</span>
                    ) : (
                      <span className="text-[10px] text-concept-accent font-mono">Sem excedente</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

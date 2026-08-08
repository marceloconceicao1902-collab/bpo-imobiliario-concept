'use client';

import React from 'react';
import { MOCK_PORTAL_KPIS, MOCK_CASHFLOW_CHART, MOCK_VOLUME_BREAKDOWN, MOCK_CLIENT_INFO } from '@/lib/mockData';
import { Wallet, ArrowUpRight, ArrowDownRight, AlertTriangle, Building2, CheckCircle2, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from 'recharts';

export const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Client Status Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-concept-slate via-concept-card to-concept-dark border border-concept-accent/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-concept-accent/15 border border-concept-accent/40 flex items-center justify-center text-concept-accent">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">{MOCK_CLIENT_INFO.companyName}</h2>
              <span className="text-[10px] font-mono font-bold bg-concept-accent/20 text-concept-accent border border-concept-accent/40 px-2 py-0.5 rounded">
                CNPJ: {MOCK_CLIENT_INFO.cnpj}
              </span>
            </div>
            <p className="text-xs text-concept-muted">
              Plano Contratado: <strong className="text-white">{MOCK_CLIENT_INFO.planName}</strong> • {MOCK_CLIENT_INFO.volumeLimit} lançamentos inclusos/mês
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="text-right">
            <span className="text-[11px] text-concept-muted block">Status Operacional</span>
            <span className="text-xs font-bold text-concept-accent flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-concept-accent animate-pulse" />
              Retaguarda BPO Ativa
            </span>
          </div>
        </div>
      </div>

      {/* 4 Main KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Repasses Agendados */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <div className="flex items-center justify-between text-concept-muted mb-2">
            <span className="text-xs font-semibold">Repasses Agendados</span>
            <div className="w-8 h-8 rounded-lg bg-concept-accent/10 border border-concept-accent/30 flex items-center justify-center text-concept-accent">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold font-mono text-white tracking-tight">
            R$ {MOCK_PORTAL_KPIS.scheduledRepasses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>84 proprietários conciliados</span>
          </div>
        </div>

        {/* KPI 2: Total a Pagar */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <div className="flex items-center justify-between text-concept-muted mb-2">
            <span className="text-xs font-semibold">Total a Pagar no Mês</span>
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold font-mono text-white tracking-tight">
            R$ {MOCK_PORTAL_KPIS.totalToPay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 text-[11px] text-concept-muted">
            <span>Condomínios, IPTUs e fornecedores</span>
          </div>
        </div>

        {/* KPI 3: Total a Receber */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <div className="flex items-center justify-between text-concept-muted mb-2">
            <span className="text-xs font-semibold">Total a Receber</span>
            <div className="w-8 h-8 rounded-lg bg-concept-blue/10 border border-concept-blue/30 flex items-center justify-center text-concept-blue">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold font-mono text-white tracking-tight">
            R$ {MOCK_PORTAL_KPIS.totalToReceive.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-2 text-[11px] text-concept-muted">
            <span>Aluguéis liquidados e a vencer</span>
          </div>
        </div>

        {/* KPI 4: Taxa de Inadimplência */}
        <div className="glass-card p-5 rounded-2xl border border-concept-border relative">
          <div className="flex items-center justify-between text-concept-muted mb-2">
            <span className="text-xs font-semibold">Taxa de Inadimplência</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold font-mono text-concept-accent tracking-tight">
            {MOCK_PORTAL_KPIS.delinquencyRate}%
          </div>
          <div className="mt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>-1.8% após régua de cobrança BPO</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Cashflow Trajectory Chart */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-concept-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Fluxo de Caixa & Repasses Acumulados</h3>
              <p className="text-xs text-concept-muted">Acompanhamento diário de entradas, saídas e repasses aos proprietários</p>
            </div>
            <span className="text-xs font-mono text-concept-accent bg-concept-accent/10 px-2.5 py-1 rounded border border-concept-accent/30">
              Agosto / 2026
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CASHFLOW_CHART} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEntradas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E599" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00E599" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRepasses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A365C" vertical={false} />
                <XAxis dataKey="day" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} tickFormatter={(val) => `R$${val / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#161F38', borderColor: '#2A365C', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(val: number) => [`R$ ${val.toLocaleString('pt-BR')}`, '']}
                />
                <Area type="monotone" dataKey="entradas" name="Entradas (Aluguéis)" stroke="#00E599" strokeWidth={2.5} fillOpacity={1} fill="url(#colorEntradas)" />
                <Area type="monotone" dataKey="repasses" name="Repasses Proprietários" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorRepasses)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Volume Breakdown Bar Chart */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-concept-border flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Distribuição de Volumetria</h3>
            <p className="text-xs text-concept-muted mb-4">Lançamentos processados por categoria neste mês</p>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_VOLUME_BREAKDOWN} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A365C" horizontal={false} />
                  <XAxis type="number" stroke="#94A3B8" fontSize={10} hide />
                  <YAxis dataKey="category" type="category" stroke="#94A3B8" fontSize={10} width={110} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#161F38', borderColor: '#2A365C', borderRadius: '8px', fontSize: '11px' }}
                  />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                    {MOCK_VOLUME_BREAKDOWN.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-concept-dark/70 border border-concept-border text-center text-xs text-concept-muted mt-2">
            Total acumulado: <strong className="text-concept-accent font-mono">382 lançamentos</strong> no mês
          </div>
        </div>
      </div>
    </div>
  );
};

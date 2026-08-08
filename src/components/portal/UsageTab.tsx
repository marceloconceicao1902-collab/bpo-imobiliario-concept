'use client';

import React from 'react';
import { MOCK_CLIENT_INFO, MOCK_VOLUME_BREAKDOWN } from '@/lib/mockData';
import { Layers, AlertTriangle, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export const UsageTab: React.FC = () => {
  const percentage = Math.min(100, Math.round((MOCK_CLIENT_INFO.volumeUsed / MOCK_CLIENT_INFO.volumeLimit) * 100));
  const remaining = Math.max(0, MOCK_CLIENT_INFO.volumeLimit - MOCK_CLIENT_INFO.volumeUsed);

  return (
    <div className="space-y-6">
      {/* Progress Main Container */}
      <div className="glass-panel p-8 rounded-3xl border border-concept-border shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-concept-blue/20 text-concept-blue border border-concept-blue/40 text-xs font-bold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Controle de Volumetria do Mês</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Consumo do Plano: {MOCK_CLIENT_INFO.planName}
            </h2>
            <p className="text-xs text-concept-muted mt-1">
              Sua franquia mensal inclui até {MOCK_CLIENT_INFO.volumeLimit} movimentações sem cobrança adicional.
            </p>
          </div>

          <div className="text-right bg-concept-dark/80 px-6 py-4 rounded-2xl border border-concept-border">
            <span className="text-xs text-concept-muted block">Investimento Mensal Base</span>
            <span className="text-2xl font-extrabold font-mono text-concept-accent">
              R$ {MOCK_CLIENT_INFO.basePrice.toLocaleString('pt-BR')}/mês
            </span>
          </div>
        </div>

        {/* Progress Bar Visual */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-white">
              Lançamentos Utilizados: <strong className="text-concept-accent text-sm">{MOCK_CLIENT_INFO.volumeUsed}</strong> / {MOCK_CLIENT_INFO.volumeLimit}
            </span>
            <span className="text-concept-accent">{percentage}% consumido</span>
          </div>

          <div className="w-full bg-concept-dark h-4 rounded-full overflow-hidden p-0.5 border border-concept-border">
            <div
              className="bg-gradient-to-r from-concept-blue via-emerald-400 to-concept-accent h-full rounded-full transition-all duration-1000 shadow-glow-cyan"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-concept-muted pt-1">
            <span>Restam <strong className="text-white font-mono">{remaining} movimentações</strong> no ciclo atual</span>
            <span>Ciclo encerra em: <strong className="text-white">31/08/2026</strong></span>
          </div>
        </div>

        {/* Rule note */}
        <div className="mt-8 p-4 rounded-2xl bg-concept-dark/60 border border-concept-border flex items-start gap-3 text-xs text-concept-muted">
          <Sparkles className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block mb-0.5">Regra de Excedente da Concept Gestão</span>
            <span>
              Caso sua imobiliária ultrapasse o limite de {MOCK_CLIENT_INFO.volumeLimit} movimentações, será aplicado automaticamente o acréscimo da faixa seguinte (+ R$ 300 por faixa de excedente).
            </span>
          </div>
        </div>
      </div>

      {/* Breakdown per type */}
      <div className="glass-panel p-6 rounded-2xl border border-concept-border">
        <h3 className="text-sm font-bold text-white mb-4">Detalhamento dos Lançamentos por Categoria</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {MOCK_VOLUME_BREAKDOWN.map((item) => (
            <div key={item.category} className="p-4 rounded-xl bg-concept-dark/80 border border-concept-border text-center space-y-1">
              <span className="text-xs text-concept-muted block">{item.category}</span>
              <span className="text-2xl font-mono font-bold text-white block">{item.count}</span>
              <span className="text-[10px] text-concept-accent font-mono">
                {Math.round((item.count / MOCK_CLIENT_INFO.volumeUsed) * 100)}% do total
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

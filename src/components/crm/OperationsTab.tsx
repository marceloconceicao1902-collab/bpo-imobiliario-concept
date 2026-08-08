'use client';

import React from 'react';
import { MOCK_OPERATIONAL_QUEUES } from '@/lib/mockData';
import { Clock, ShieldCheck, CheckCircle2, UserCheck, AlertTriangle } from 'lucide-react';

export const OperationsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header SLA Summary */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-concept-card to-concept-dark border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Mesa de Trabalho BPO Operacional</h2>
            <p className="text-xs text-concept-muted">Fila de rotinas diárias dos analistas financeiros e monitoramento de SLA de repasses</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <span className="text-[11px] text-concept-muted block">Taxa de SLA no Mês</span>
            <span className="text-xl font-bold font-mono text-concept-accent">99.4% Cumprido</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-concept-muted block">Rotinas do Dia</span>
            <span className="text-xl font-bold font-mono text-white">121 Lotes</span>
          </div>
        </div>
      </div>

      {/* Operational Queues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_OPERATIONAL_QUEUES.map((queue) => (
          <div key={queue.id} className="glass-panel p-5 rounded-2xl border border-concept-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-concept-muted">SLA ALVO: {queue.targetTime}</span>
              {queue.status === 'EM_ANDAMENTO' ? (
                <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 animate-spin" /> EM ANDAMENTO
                </span>
              ) : queue.status === 'CONCLUIDO' ? (
                <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> NO PRAZO
                </span>
              ) : (
                <span className="text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 rounded-full">
                  FILA PENDENTE
                </span>
              )}
            </div>

            <h3 className="text-sm font-bold text-white leading-snug">{queue.routine}</h3>

            <div className="p-3 rounded-xl bg-concept-dark/80 border border-concept-border flex items-center justify-between text-xs text-concept-muted">
              <span>Analista Responsável: <strong className="text-white">{queue.analyst}</strong></span>
              <span className="font-mono text-concept-accent font-bold">{queue.itemsCount} itens</span>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-concept-muted">Tempo Restante SLA:</span>
              <span className="font-mono font-extrabold text-white">{queue.remainingTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

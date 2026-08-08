'use client';

import React from 'react';
import { MOCK_DELINQUENT_TENANTS } from '@/lib/mockData';
import { AlertCircle, ShieldAlert, CheckCircle2, MessageSquare, FileText, PhoneCall, Scale } from 'lucide-react';

export const DelinquencyTab: React.FC = () => {
  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'Notificação de Atraso':
        return <MessageSquare className="w-4 h-4 text-amber-400" />;
      case 'Cobrança Extrajudicial':
        return <FileText className="w-4 h-4 text-rose-400" />;
      case 'Acordo em Andamento':
        return <CheckCircle2 className="w-4 h-4 text-concept-accent" />;
      default:
        return <Scale className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Summary */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-concept-card to-concept-dark border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Régua de Cobrança e Inadimplência Ativa</h2>
            <p className="text-xs text-concept-muted">
              Gestão automatizada e humanizada da carteira de locatários inadimplentes executada pelo BPO
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <span className="text-[11px] text-concept-muted block">Inadimplência Atual</span>
            <span className="text-xl font-bold font-mono text-concept-accent">2.4% da Carteira</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-concept-muted block">Recuperado este mês</span>
            <span className="text-xl font-bold font-mono text-emerald-400">R$ 24.800,00</span>
          </div>
        </div>
      </div>

      {/* Delinquent Tenants Roster */}
      <div className="glass-panel rounded-2xl border border-concept-border overflow-hidden">
        <div className="p-4 border-b border-concept-border flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">Locatários em Processo de Cobrança ({MOCK_DELINQUENT_TENANTS.length})</h3>
          <span className="text-xs font-mono text-rose-400">Total em Atraso: R$ 24.850,00</span>
        </div>

        <div className="divide-y divide-concept-border/40">
          {MOCK_DELINQUENT_TENANTS.map((item) => (
            <div key={item.id} className="p-5 hover:bg-concept-slate/30 transition-colors flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">{item.tenantName}</h4>
                  <span className="text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded">
                    {item.daysOverdue} dias em atraso
                  </span>
                </div>
                <p className="text-xs text-concept-muted">
                  Imóvel: <span className="text-white">{item.propertyAddress}</span> • Proprietário: <span className="text-white">{item.ownerName}</span>
                </p>
                <div className="text-[11px] text-concept-accent pt-1 flex items-center gap-1.5">
                  {getStageIcon(item.debtStage)}
                  <span>Histórico BPO: {item.lastActionDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                <div className="text-right">
                  <span className="text-[10px] text-concept-muted block">Débito Acumulado</span>
                  <span className="text-base font-extrabold font-mono text-rose-400">
                    R$ {item.debtAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-concept-dark border border-concept-border text-center">
                  <span className="text-[10px] text-concept-muted block">Etapa da Régua</span>
                  <span className="text-xs font-bold text-white">{item.debtStage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';

import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, DollarSign, Wallet, FileText, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectProduct: (product: 'BPO_VOLUME' | 'GESTÃO_RECEBIVEIS') => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectProduct }) => {
  return (
    <section className="py-20 bg-concept-slate/30 border-t border-concept-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-concept-accent block mb-2">
            Nossas Soluções Principais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolha o Modelo de Atendimento Ideal para Sua Imobiliária
          </h2>
          <p className="mt-4 text-concept-muted text-base">
            Oferecemos modelos flexíveis baseados em volume de lançamentos ou faturamento mensal gerenciado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PRODUCT 1: BPO Financeiro Completo */}
          <div className="glass-card p-8 rounded-3xl border border-concept-border relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-concept-blue/20 text-concept-blue border border-concept-blue/40 text-xs font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>PRODUTO 1 • Cobrança por Volume</span>
                </div>
                <span className="text-xs font-semibold text-concept-muted">A partir de R$ 1.990/mês</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                BPO Financeiro Completo
              </h3>
              <p className="text-sm text-concept-muted mb-6 leading-relaxed">
                Terceirização total das rotinas operacionais financeiras. Ideal para imobiliárias que buscam precisão no contas a pagar, conciliação e repasses sem precisar contratar equipe interna.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Contas a Pagar & Contas a Receber:</strong> Agendamentos, baixas e liquidações sem atrasos.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Conciliação Bancária Multi-Contas:</strong> Importação e batimento diário de extratos OFX.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Emissão de NFs e Boletos:</strong> Automatização de notas fiscais de serviços e cobrança de aluguéis.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Repasses a Proprietários:</strong> Relatórios detalhados e controle rigoroso por carteira.
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectProduct('BPO_VOLUME')}
              className="w-full glow-blue-button py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>Simular Plano por Volume (Lançamentos/mês)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 2: Gestão de Recebíveis */}
          <div className="glass-card p-8 rounded-3xl border border-concept-border relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-concept-accent/20 text-concept-accent border border-concept-accent/40 text-xs font-bold">
                  <Wallet className="w-3.5 h-3.5" />
                  <span>PRODUTO 2 • Cobrança por Faturamento</span>
                </div>
                <span className="text-xs font-semibold text-concept-muted">A partir de R$ 990/mês</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Gestão de Recebíveis & Cobrança
              </h3>
              <p className="text-sm text-concept-muted mb-6 leading-relaxed">
                Foco total na maximização da arrecadação de aluguéis, redução da taxa de inadimplência e régua automatizada de notificação via WhatsApp e e-mail.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Régua de Cobrança Preventiva & Ativa:</strong> Notificações automáticas D-3, D+1, D+5 e D+15.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Gestão de Recebimento:</strong> Acompanhamento em tempo real de boletos liquidados x pendentes.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Cobrança Extrajudicial de Inadimplentes:</strong> Atendimento humanizado e acordos de parcelamento.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-concept-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">
                    <strong>Relatório Semanal de Liquidez:</strong> Visibilidade completa dos valores recuperados.
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectProduct('GESTÃO_RECEBIVEIS')}
              className="w-full glow-cyan-button py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>Simular por Faturamento Mensal (R$)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

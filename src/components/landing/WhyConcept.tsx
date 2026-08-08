'use client';

import React from 'react';
import { ShieldCheck, Zap, BarChart2, Headphones, Lock } from 'lucide-react';

export const WhyConcept: React.FC = () => {
  return (
    <section className="py-20 bg-concept-dark relative border-t border-concept-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-concept-accent block">
              Diferenciais de Mercado
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Por que a Concept Gestão é o Parceiro BPO Certo para Sua Imobiliária?
            </h2>
            <p className="text-sm text-concept-muted leading-relaxed">
              Não somos uma contabilidade tradicional. Somos um hub de inteligência financeira e operacional focado exclusivamente na dinâmica do setor imobiliário.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-concept-blue/20 border border-concept-blue/40 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-concept-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Capacidade para Alto Volume</h3>
                  <p className="text-xs text-concept-muted">
                    Estrutura dimensionada para processar milhares de boletos, conciliações diárias e repasses a centenas de proprietários no mesmo dia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-concept-accent/20 border border-concept-accent/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-concept-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Cobrança Estruturada e Humanizada</h3>
                  <p className="text-xs text-concept-muted">
                    Régua automática com acompanhamento preventivo que reduz a inadimplência mantendo o bom relacionamento com locatários.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0">
                  <BarChart2 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Transparência e Portal em Tempo Real</h3>
                  <p className="text-xs text-concept-muted">
                    Acompanhe cada pagamento, repasse e chamado do BPO através de um portal logado e relatórios consolidados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Segurança e Segregação de Contas</h3>
                  <p className="text-xs text-concept-muted">
                    Segregação rigorosa de contas bancárias de garantia, retenções e contas de movimentação operacional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card p-8 rounded-3xl border border-concept-border shadow-glow-cyan text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-concept-accent/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-concept-dark border border-concept-accent/50 flex items-center justify-center mx-auto text-concept-accent">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Analistas Financeiros Dedicados
              </h3>
              <p className="text-xs text-concept-muted leading-relaxed">
                Sua imobiliária conta com uma mesa de atendimento BPO pronta para responder chamados com metas de SLA estritas (repasses até as 14h e baixas diárias).
              </p>
              <div className="grid grid-cols-2 gap-4 text-center border-t border-concept-border pt-6">
                <div>
                  <span className="text-2xl font-mono font-extrabold text-concept-accent block">99.4%</span>
                  <span className="text-[11px] text-concept-muted">SLA Cumprido no Mês</span>
                </div>
                <div>
                  <span className="text-2xl font-mono font-extrabold text-white block">100%</span>
                  <span className="text-[11px] text-concept-muted">Auditoria de Extratos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

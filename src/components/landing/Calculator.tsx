'use client';

import React, { useState, useId } from 'react';
import { ProductType } from '@/lib/types';
import { calculatePlan } from '@/lib/calculator';
import { Calculator as CalcIcon, Layers, Wallet, AlertTriangle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface CalculatorProps {
  initialProduct?: ProductType;
  onOpenProposalModal: (params: {
    product: ProductType;
    value: number;
    planName: string;
    totalMonthly: number;
  }) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  initialProduct = 'BPO_VOLUME',
  onOpenProposalModal,
}) => {
  const [productType, setProductType] = useState<ProductType>(initialProduct);
  const [volume, setVolume] = useState<number>(220); // Default 220 movimentações/mês
  const [revenue, setRevenue] = useState<number>(350000); // Default R$ 350.000/mês

  const volumeSliderId = useId();
  const volumeInputId = useId();
  const revenueSliderId = useId();
  const revenueInputId = useId();

  const currentValue = productType === 'BPO_VOLUME' ? volume : revenue;
  const result = calculatePlan(productType, currentValue);

  return (
    <section id="calculadora" className="py-20 bg-concept-dark border-t border-concept-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-concept-accent/15 text-concept-accent border border-concept-accent/30 text-xs font-bold mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Simulador em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculadora Interativa de Planos
          </h2>
          <p className="mt-3 text-concept-muted text-sm sm:text-base">
            Simule o investimento exato para a sua imobiliária com base no seu volume de lançamentos mensais ou faturamento gerido.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-concept-border shadow-2xl relative">
          {/* Mode Switcher Tabs */}
          <div className="flex rounded-2xl bg-concept-slate/80 p-1.5 border border-concept-border mb-8 max-w-md mx-auto">
            <button
              onClick={() => setProductType('BPO_VOLUME')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                productType === 'BPO_VOLUME'
                  ? 'bg-concept-blue text-white shadow-glow-blue'
                  : 'text-concept-muted hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>1. Por Volume (Lançamentos/mês)</span>
            </button>
            <button
              onClick={() => setProductType('GESTÃO_RECEBIVEIS')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                productType === 'GESTÃO_RECEBIVEIS'
                  ? 'bg-concept-accent text-concept-dark shadow-glow-cyan'
                  : 'text-concept-muted hover:text-white'
              }`}
            >
              <Wallet className="w-4 h-4" />
              <span>2. Por Faturamento (R$/mês)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Slider Column */}
            <div className="lg:col-span-7 space-y-6">
              {productType === 'BPO_VOLUME' ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={volumeSliderId} className="text-xs font-semibold text-concept-muted">
                      Total de Movimentações Mensais
                    </label>
                    <span className="text-xs text-concept-accent font-mono font-bold">
                      (Contas a Pagar + Receber + NFs + Boletos + Conciliações)
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      id={volumeSliderId}
                      type="range"
                      min={10}
                      max={1200}
                      step={10}
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="flex-1 h-3 bg-concept-slate rounded-lg appearance-none cursor-pointer accent-concept-accent"
                    />
                    <div className="w-28 flex items-center bg-concept-slate border border-concept-border rounded-xl px-3 py-2">
                      <input
                        id={volumeInputId}
                        type="number"
                        min={1}
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-mono font-bold text-center text-sm outline-none"
                      />
                      <span className="text-[10px] text-concept-muted font-mono">movs</span>
                    </div>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-[11px] text-concept-muted">Exemplos:</span>
                    <button
                      onClick={() => setVolume(50)}
                      className="px-2.5 py-1 rounded bg-concept-slate text-[11px] text-white hover:border-concept-accent border border-concept-border"
                    >
                      50 movs (Emp. A)
                    </button>
                    <button
                      onClick={() => setVolume(220)}
                      className="px-2.5 py-1 rounded bg-concept-slate text-[11px] text-white hover:border-concept-accent border border-concept-border"
                    >
                      220 movs (Emp. B)
                    </button>
                    <button
                      onClick={() => setVolume(600)}
                      className="px-2.5 py-1 rounded bg-concept-slate text-[11px] text-white hover:border-concept-accent border border-concept-border"
                    >
                      600 movs (Emp. C)
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={revenueSliderId} className="text-xs font-semibold text-concept-muted">
                      Faturamento Mensal da Imobiliária (R$)
                    </label>
                    <span className="text-xs text-concept-accent font-mono font-bold">
                      Carteira de Aluguéis Processada
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      id={revenueSliderId}
                      type="range"
                      min={30000}
                      max={2500000}
                      step={20000}
                      value={revenue}
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="flex-1 h-3 bg-concept-slate rounded-lg appearance-none cursor-pointer accent-concept-blue"
                    />
                    <div className="w-36 flex items-center bg-concept-slate border border-concept-border rounded-xl px-3 py-2">
                      <span className="text-xs text-concept-muted mr-1">R$</span>
                      <input
                        id={revenueInputId}
                        type="number"
                        step={10000}
                        value={revenue}
                        onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-mono font-bold text-center text-xs outline-none"
                      />
                    </div>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-[11px] text-concept-muted">Exemplos:</span>
                    <button
                      onClick={() => setRevenue(80000)}
                      className="px-2.5 py-1 rounded bg-concept-slate text-[11px] text-white hover:border-concept-blue border border-concept-border"
                    >
                      R$ 80k (Start)
                    </button>
                    <button
                      onClick={() => setRevenue(350000)}
                      className="px-2.5 py-1 rounded bg-concept-slate text-[11px] text-white hover:border-concept-blue border border-concept-border"
                    >
                      R$ 350k (Growth)
                    </button>
                    <button
                      onClick={() => setRevenue(1200000)}
                      className="px-2.5 py-1 rounded bg-concept-slate text-[11px] text-white hover:border-concept-blue border border-concept-border"
                    >
                      R$ 1.2M (Performance)
                    </button>
                  </div>
                </div>
              )}

              {/* Package Inclusion summary */}
              <div className="p-4 rounded-2xl bg-concept-slate/40 border border-concept-border/70 space-y-2 text-xs">
                <span className="text-concept-accent font-bold block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>O que está incluído nesta simulação:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-concept-muted">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-concept-accent" />
                    <span>Contas a pagar e receber</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-concept-accent" />
                    <span>Emissão de NFs e Boletos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-concept-accent" />
                    <span>Conciliação Multi-Contas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-concept-accent" />
                    <span>Portal do Cliente Exclusivo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Card Column */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-concept-slate to-concept-dark border border-concept-accent/30 shadow-glow-cyan text-center space-y-5 relative">
                <span className="text-[11px] font-mono tracking-widest text-concept-accent uppercase font-bold block">
                  {result.tierName}
                </span>

                <div>
                  <span className="text-xs text-concept-muted block">Investimento Estimado</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-lg text-white font-bold">R$</span>
                    <span className="text-4xl font-extrabold text-white tracking-tight font-mono">
                      {result.totalMonthly.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs text-concept-muted font-medium">/mês</span>
                  </div>
                </div>

                {/* Limit status */}
                <div className="text-xs text-concept-muted border-t border-b border-concept-border/60 py-3 space-y-1">
                  <span className="font-semibold text-white block">{result.limitLabel}</span>
                  <span className="text-[11px] text-slate-300 block">{result.recommendedFor}</span>
                </div>

                {/* Excedente Alert if applicable */}
                {result.isOverLimit && (
                  <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/40 text-left flex items-start gap-2 text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300 block">Acréscimo de Excedente</span>
                      <span className="text-[11px] text-amber-200">
                        {result.overageBrackets} faixa(s) excedente(s) = + R${' '}
                        {result.overageFee.toLocaleString('pt-BR')} (R$ 300/faixa de 100 movs).
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() =>
                    onOpenProposalModal({
                      product: productType,
                      value: currentValue,
                      planName: result.tierName,
                      totalMonthly: result.totalMonthly,
                    })
                  }
                  className="w-full glow-cyan-button py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Gerar Proposta Comercial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

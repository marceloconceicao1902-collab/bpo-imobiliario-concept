'use client';

import React from 'react';
import { REAL_ESTATE_PAIN_POINTS } from '@/lib/constants';
import { Receipt, Building2, AlertCircle, BarChart3 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Receipt: <Receipt className="w-6 h-6 text-rose-400" />,
  Building2: <Building2 className="w-6 h-6 text-amber-400" />,
  AlertCircle: <AlertCircle className="w-6 h-6 text-cyan-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-indigo-400" />,
};

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-concept-dark relative border-t border-concept-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-concept-accent block mb-2">
            Desafios do Setor Imobiliário
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sua imobiliária enfrenta gargalos no financeiro todos os meses?
          </h2>
          <p className="mt-4 text-concept-muted text-base">
            O setor imobiliário possui rotinas financeiras extremamente específicas e volumosas que exigem uma retaguarda altamente qualificada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_ESTATE_PAIN_POINTS.map((point) => (
            <div
              key={point.number}
              className="glass-card p-6 rounded-2xl border border-concept-border relative group overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-concept-accent/5 rounded-full blur-xl group-hover:bg-concept-accent/15 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-concept-slate border border-concept-border flex items-center justify-center">
                  {iconMap[point.iconName]}
                </div>
                <span className="font-mono text-2xl font-extrabold text-concept-border group-hover:text-concept-accent transition-colors">
                  {point.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-xs text-concept-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

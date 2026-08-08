'use client';

import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAuthModal: (role?: 'CLIENT' | 'ADMIN') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuthModal }) => {
  return (
    <footer className="bg-concept-dark border-t border-concept-border py-12 text-xs text-concept-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-concept-accent/20 border border-concept-accent flex items-center justify-center text-concept-accent">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                CONCEPT <span className="text-concept-accent">GESTÃO</span>
              </span>
            </div>
            <p className="text-xs text-concept-muted leading-relaxed">
              Plataforma de BPO Financeiro e inteligência de cobrança especializada em imobiliárias e administradoras de carteiras de locação.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solucoes" className="hover:text-concept-accent transition-colors">
                  BPO Financeiro & Recebíveis
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-concept-accent transition-colors">
                  Calculadora Interativa de Planos
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-concept-accent transition-colors">
                  Tabela Oficial de Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-concept-accent transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Atendimento & Suporte</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-concept-accent" />
                <span>(11) 3400-8800 • Comercial</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-concept-accent" />
                <span>contato@conceptgestao.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-concept-accent" />
                <span>Av. Paulista, 1000 - São Paulo / SP</span>
              </li>
            </ul>
          </div>

          {/* Portal Access box */}
          <div className="p-4 rounded-2xl bg-concept-slate border border-concept-border space-y-3">
            <span className="font-bold text-white block">Área Restrita da Imobiliária</span>
            <p className="text-[11px] text-concept-muted">
              Já é parceiro Concept Gestão? Acompanhe em tempo real as rotinas do seu BPO.
            </p>
            <button
              onClick={() => onOpenAuthModal('CLIENT')}
              className="w-full glow-cyan-button py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <span>Acessar Portal do Cliente</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="border-t border-concept-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4">
          <span>© 2026 Concept Gestão. Todos os direitos reservados. Plataforma SaaS BPO Imobiliário.</span>

          {/* Secret Admin BPO Login Link for Team */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenAuthModal('ADMIN')}
              className="text-concept-muted hover:text-purple-300 transition-colors flex items-center gap-1 text-[11px]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Acesso Restrito Equipe BPO (CRM Operacional)</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

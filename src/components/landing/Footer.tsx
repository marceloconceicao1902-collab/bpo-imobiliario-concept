'use client';

import React from 'react';
import { SystemView } from '@/lib/types';
import { Building2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onViewChange: (view: SystemView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
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
                <button onClick={() => onViewChange('LANDING')} className="hover:text-concept-accent transition-colors">
                  Visão 1: Landing Page Comercial
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('PORTAL')} className="hover:text-concept-accent transition-colors">
                  Visão 2: Portal do Cliente Logado
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange('CRM')} className="hover:text-concept-accent transition-colors">
                  Visão 3: CRM & Operação Interna BPO
                </button>
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
            <span className="font-bold text-white block">Área Restrita do Cliente</span>
            <p className="text-[11px] text-concept-muted">
              Já é parceiro Concept Gestão? Acompanhe em tempo real as rotinas do seu BPO.
            </p>
            <button
              onClick={() => onViewChange('PORTAL')}
              className="w-full glow-blue-button py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <span>Acessar Portal Imobiliária</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="border-t border-concept-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px]">
          <span>© 2026 Concept Gestão. Todos os direitos reservados. Plataforma SaaS BPO Imobiliário.</span>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span className="hover:underline cursor-pointer">Termos de Uso</span>
            <span className="hover:underline cursor-pointer">Política de Privacidade</span>
            <span className="hover:underline cursor-pointer">LGPD Imobiliária</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

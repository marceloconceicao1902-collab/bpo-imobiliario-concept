'use client';

import React, { useState, useId } from 'react';
import { ProductType } from '@/lib/types';
import { Send, CheckCircle2, Phone, Mail, Building, User, Layers, Sparkles } from 'lucide-react';

interface LeadFormProps {
  initialProduct?: ProductType;
  initialPlanName?: string;
  initialPrice?: number;
  onSubmitSuccess: (leadData: {
    name: string;
    email: string;
    phone: string;
    realEstateName: string;
    estimatedVolume: number;
    product: ProductType;
    proposedPrice: number;
  }) => void;
  onClose?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialProduct = 'BPO_VOLUME',
  initialPlanName = 'BPO Financeiro (Empresa B)',
  initialPrice = 2290,
  onSubmitSuccess,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [realEstateName, setRealEstateName] = useState('');
  const [estimatedVolume, setEstimatedVolume] = useState(200);
  const [product, setProduct] = useState<ProductType>(initialProduct);
  const [submitted, setSubmitted] = useState(false);

  const nameInputId = useId();
  const emailInputId = useId();
  const phoneInputId = useId();
  const realEstateInputId = useId();
  const productSelectId = useId();
  const volumeSelectId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !realEstateName) return;

    onSubmitSuccess({
      name,
      email,
      phone,
      realEstateName,
      estimatedVolume: Number(estimatedVolume),
      product,
      proposedPrice: initialPrice,
    });

    setSubmitted(true);
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-concept-border shadow-glow-cyan max-w-xl mx-auto text-left relative">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-concept-accent/20 border border-concept-accent text-concept-accent flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-white">Proposta Enviada com Sucesso!</h3>
          <p className="text-xs text-concept-muted max-w-md mx-auto leading-relaxed">
            Obrigado, <strong className="text-white">{name}</strong>! Recebemos a solicitação para a imobiliária{' '}
            <strong className="text-concept-accent">{realEstateName}</strong>. Nosso especialista de BPO entrará em contato via WhatsApp/E-mail em breve.
          </p>
          <div className="p-4 rounded-xl bg-concept-dark/80 border border-concept-border text-xs text-concept-muted text-left">
            <span className="font-semibold text-white block mb-1">Status da Solicitacão no CRM:</span>
            <div className="flex items-center gap-2 text-concept-accent font-mono">
              <Sparkles className="w-4 h-4" />
              <span>LEAD REGISTRADO NO FUNIL COMERCIAL (VISÃO 3)</span>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-concept-slate hover:bg-concept-border text-white transition-colors"
            >
              Fechar Janela
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-concept-accent uppercase tracking-wider block">
                Solicitação Comercial
              </span>
              <h3 className="text-xl font-extrabold text-white">Solicitar Proposta Personalizada</h3>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-concept-muted hover:text-white text-xs font-bold px-2.5 py-1 rounded bg-concept-slate"
              >
                ✕
              </button>
            )}
          </div>

          <div className="p-3 rounded-xl bg-concept-dark/80 border border-concept-border text-xs flex items-center justify-between">
            <span className="text-concept-muted">Plano Selecionado:</span>
            <span className="font-bold text-concept-accent font-mono">
              {initialPlanName} • R$ {initialPrice.toLocaleString('pt-BR')}/mês
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor={nameInputId} className="text-xs font-semibold text-concept-muted block mb-1">
                Seu Nome Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
                <input
                  id={nameInputId}
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo Silveira"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={emailInputId} className="text-xs font-semibold text-concept-muted block mb-1">
                  E-mail Corporativo *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
                  <input
                    id={emailInputId}
                    type="email"
                    required
                    placeholder="carlos@imobiliaria.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={phoneInputId} className="text-xs font-semibold text-concept-muted block mb-1">
                  WhatsApp / Telefone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
                  <input
                    id={phoneInputId}
                    type="tel"
                    required
                    placeholder="(11) 98765-4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor={realEstateInputId} className="text-xs font-semibold text-concept-muted block mb-1">
                Nome da Imobiliária *
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
                <input
                  id={realEstateInputId}
                  type="text"
                  required
                  placeholder="Ex: Novo Lar Imóveis SP"
                  value={realEstateName}
                  onChange={(e) => setRealEstateName(e.target.value)}
                  className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={productSelectId} className="text-xs font-semibold text-concept-muted block mb-1">
                  Produto de Interesse
                </label>
                <select
                  id={productSelectId}
                  value={product}
                  onChange={(e) => setProduct(e.target.value as ProductType)}
                  className="w-full bg-concept-dark border border-concept-border rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                >
                  <option value="BPO_VOLUME">BPO Financeiro Completo (Volume)</option>
                  <option value="GESTÃO_RECEBIVEIS">Gestão de Recebíveis (Faturamento)</option>
                </select>
              </div>

              <div>
                <label htmlFor={volumeSelectId} className="text-xs font-semibold text-concept-muted block mb-1">
                  Volume de Lançamentos/mês
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-concept-muted absolute left-3 top-3" />
                  <select
                    id={volumeSelectId}
                    value={estimatedVolume}
                    onChange={(e) => setEstimatedVolume(Number(e.target.value))}
                    className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option value={50}>Até 80 movimentações (Empresa A)</option>
                    <option value={200}>Até 450 movimentações (Empresa B)</option>
                    <option value={600}>Até 900 movimentações (Empresa C)</option>
                    <option value={1000}>Mais de 900 movimentações (Personalizado)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full glow-cyan-button py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 pt-3"
          >
            <Send className="w-4 h-4" />
            <span>Enviar e Receber Proposta em PDF</span>
          </button>
        </form>
      )}
    </div>
  );
};

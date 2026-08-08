'use client';

import React, { useState } from 'react';
import { MOCK_LEADS } from '@/lib/mockData';
import { LeadItem } from '@/lib/types';
import { Plus, Sparkles, Building, User, Mail, Phone, FileText, Send, CheckCircle2 } from 'lucide-react';

export const SalesFunnelTab: React.FC = () => {
  const [leads, setLeads] = useState<LeadItem[]>(MOCK_LEADS);
  const [selectedLeadForProposal, setSelectedLeadForProposal] = useState<LeadItem | null>(null);

  const stages: { id: LeadItem['stage']; label: string; color: string }[] = [
    { id: 'LEAD_RECEBIDO', label: '1. Lead Recebido', color: 'border-slate-500 text-slate-300' },
    { id: 'REUNIAO_AGENDADA', label: '2. Reunião Agendada', color: 'border-blue-500 text-blue-400' },
    { id: 'PROPOSTA_ENVIADA', label: '3. Proposta Enviada', color: 'border-amber-500 text-amber-400' },
    { id: 'EM_NEGOCIACAO', label: '4. Em Negociação', color: 'border-purple-500 text-purple-400' },
    { id: 'CONTRATO_FECHADO', label: '5. Contrato Fechado', color: 'border-concept-accent text-concept-accent' },
  ];

  const handleAdvanceStage = (leadId: string) => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (lead.id === leadId) {
          const currentIndex = stages.findIndex((s) => s.id === lead.stage);
          if (currentIndex < stages.length - 1) {
            return { ...lead, stage: stages[currentIndex + 1].id };
          }
        }
        return lead;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Funnel Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Funil de Vendas Comercial BPO</h2>
          <p className="text-xs text-concept-muted">Pipeline de prospecção de imobiliárias e gerador automático de propostas</p>
        </div>
        <span className="text-xs font-mono text-concept-accent bg-concept-accent/10 px-3 py-1.5 rounded-xl border border-concept-accent/30 font-bold">
          Pipeline Total: R$ {leads.reduce((acc, l) => acc + l.proposedPrice, 0).toLocaleString('pt-BR')}/mês
        </span>
      </div>

      {/* Kanban Pipeline Columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto">
        {stages.map((stg) => {
          const stageLeads = leads.filter((l) => l.stage === stg.id);
          return (
            <div key={stg.id} className="glass-panel p-3 rounded-2xl border border-concept-border flex flex-col justify-between min-w-[220px]">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-concept-border mb-3">
                  <span className={`text-xs font-bold ${stg.color}`}>{stg.label}</span>
                  <span className="text-[10px] font-mono font-bold bg-concept-dark px-2 py-0.5 rounded border border-concept-border text-white">
                    {stageLeads.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3.5 rounded-xl bg-concept-dark/90 border border-concept-border hover:border-concept-accent/50 transition-colors space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-concept-muted">{lead.createdAt}</span>
                        <span className="text-[10px] font-mono font-bold text-concept-accent">
                          R$ {lead.proposedPrice}/mês
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white leading-tight">{lead.realEstateName}</h4>
                      <p className="text-[11px] text-concept-muted">Contato: {lead.name}</p>

                      <div className="pt-2 border-t border-concept-border/40 flex items-center justify-between gap-1">
                        <button
                          onClick={() => setSelectedLeadForProposal(lead)}
                          className="text-[10px] font-semibold text-concept-blue hover:underline flex items-center gap-1"
                        >
                          <FileText className="w-3 h-3" /> Ver Proposta
                        </button>

                        {stg.id !== 'CONTRATO_FECHADO' && (
                          <button
                            onClick={() => handleAdvanceStage(lead.id)}
                            className="text-[10px] font-bold text-concept-accent hover:bg-concept-accent/20 px-2 py-0.5 rounded transition-colors"
                          >
                            Avançar →
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Auto Commercial Proposal Generator Modal */}
      {selectedLeadForProposal && (
        <div className="fixed inset-0 z-50 bg-concept-dark/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card p-8 rounded-3xl border border-concept-accent/50 max-w-2xl w-full text-left space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-concept-border">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-concept-accent" />
                <h3 className="text-lg font-extrabold text-white">Proposta Comercial Gerada Automaticamente</h3>
              </div>
              <button onClick={() => setSelectedLeadForProposal(null)} className="text-xs text-concept-muted hover:text-white font-bold px-2 py-1 rounded bg-concept-slate">✕</button>
            </div>

            {/* Proposal Content */}
            <div className="p-6 rounded-2xl bg-concept-dark border border-concept-border space-y-4 font-sans">
              <div className="flex justify-between items-start border-b border-concept-border pb-4">
                <div>
                  <span className="text-[10px] tracking-widest text-concept-accent uppercase font-mono font-bold block">CONCEPT GESTÃO BPO</span>
                  <h4 className="text-xl font-extrabold text-white">{selectedLeadForProposal.realEstateName}</h4>
                  <p className="text-xs text-concept-muted">A/C: {selectedLeadForProposal.name} ({selectedLeadForProposal.email})</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-concept-muted block">Data de Emissão</span>
                  <span className="text-xs font-mono font-bold text-white">08/08/2026</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-concept-slate/50 border border-concept-border">
                  <span className="text-concept-muted block">Produto Indicado:</span>
                  <span className="font-bold text-white">{selectedLeadForProposal.product === 'BPO_VOLUME' ? 'BPO Financeiro Completo' : 'Gestão de Recebíveis'}</span>
                </div>
                <div className="p-3 rounded-xl bg-concept-slate/50 border border-concept-border">
                  <span className="text-concept-muted block">Volumetria Estimada:</span>
                  <span className="font-bold text-white font-mono">{selectedLeadForProposal.estimatedVolume} movimentações/mês</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-concept-slate to-concept-dark border border-concept-accent/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-concept-muted block">Mensalidade Proposta</span>
                  <span className="text-2xl font-extrabold font-mono text-concept-accent">
                    R$ {selectedLeadForProposal.proposedPrice.toLocaleString('pt-BR')},00 / mês
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-950/60 px-3 py-1 rounded border border-emerald-500/40">
                  Sem taxa de adesão
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedLeadForProposal(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-concept-slate hover:bg-concept-border text-white transition-colors"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  alert(`Proposta comercial enviada em PDF para ${selectedLeadForProposal.email}!`);
                  setSelectedLeadForProposal(null);
                }}
                className="glow-cyan-button px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Proposta via E-mail / WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

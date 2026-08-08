'use client';

import React, { useState, useId } from 'react';
import { MOCK_TICKETS } from '@/lib/mockData';
import { BPOTicketItem } from '@/lib/types';
import { Clock, Plus, CheckCircle2, AlertCircle, FileText, Send, Sparkles } from 'lucide-react';

export const WorkflowTab: React.FC = () => {
  const [tickets, setTickets] = useState<BPOTicketItem[]>(MOCK_TICKETS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Repasse Proprietário' | 'Condomínio / IPTU' | 'Emissão NF-e' | 'Conciliação Bancária' | 'Solicitação Diversa'>('Repasse Proprietário');
  const [newPriority, setNewPriority] = useState<'BAIXA' | 'MEDIA' | 'ALTA' | 'URGENTE'>('MEDIA');

  const titleInputId = useId();
  const categorySelectId = useId();
  const prioritySelectId = useId();

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newTicket: BPOTicketItem = {
      id: `t-${Date.now()}`,
      ticketNumber: `CH-2026-${Math.floor(100 + Math.random() * 900)}`,
      title: newTitle,
      category: newCategory,
      status: 'PENDENTE_IMOBILIARIA',
      priority: newPriority,
      slaTime: 'SLA 4h (Atendimento BPO)',
      createdAt: new Date().toISOString(),
    };

    setTickets([newTicket, ...tickets]);
    setNewTitle('');
    setIsModalOpen(false);
  };

  const getStatusColor = (status: BPOTicketItem['status']) => {
    switch (status) {
      case 'PENDENTE_IMOBILIARIA':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'EM_PROCESSAMENTO_BPO':
        return 'bg-concept-blue/20 text-concept-blue border-concept-blue/40';
      case 'CONCLUIDO':
        return 'bg-concept-accent/20 text-concept-accent border-concept-accent/40';
    }
  };

  const getPriorityBadge = (priority: BPOTicketItem['priority']) => {
    switch (priority) {
      case 'URGENTE':
        return <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded font-bold">URGENTE</span>;
      case 'ALTA':
        return <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">ALTA</span>;
      case 'MEDIA':
        return <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2 py-0.5 rounded">MÉDIA</span>;
      default:
        return <span className="text-[10px] bg-slate-500/20 text-slate-300 border border-slate-500/40 px-2 py-0.5 rounded">BAIXA</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Central de Solicitações BPO (Workflow)</h2>
          <p className="text-xs text-concept-muted">Acompanhe e abra novos chamados operacionais diretamente para a equipe da Concept Gestão</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="glow-cyan-button px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Solicitação BPO</span>
        </button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Pendente Imobiliária */}
        <div className="glass-panel p-4 rounded-2xl border border-concept-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-concept-border mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="font-bold text-xs text-white">1. Pendente Imobiliária</span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                {tickets.filter((t) => t.status === 'PENDENTE_IMOBILIARIA').length}
              </span>
            </div>

            <div className="space-y-3">
              {tickets
                .filter((t) => t.status === 'PENDENTE_IMOBILIARIA')
                .map((ticket) => (
                  <div key={ticket.id} className="p-4 rounded-xl bg-concept-dark/80 border border-concept-border hover:border-amber-400/50 transition-colors space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-concept-muted">{ticket.ticketNumber}</span>
                      {getPriorityBadge(ticket.priority)}
                    </div>
                    <h4 className="text-xs font-bold text-white leading-snug">{ticket.title}</h4>
                    <div className="flex items-center justify-between text-[11px] text-concept-muted pt-2 border-t border-concept-border/40">
                      <span className="text-concept-accent font-semibold">{ticket.category}</span>
                      <span className="flex items-center gap-1 text-amber-300 font-mono">
                        <Clock className="w-3 h-3" />
                        {ticket.slaTime}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Column 2: Em Processamento BPO */}
        <div className="glass-panel p-4 rounded-2xl border border-concept-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-concept-border mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-concept-blue" />
                <span className="font-bold text-xs text-white">2. Em Processamento BPO</span>
              </div>
              <span className="text-xs font-mono font-bold text-concept-blue bg-blue-950/60 px-2 py-0.5 rounded border border-concept-blue/30">
                {tickets.filter((t) => t.status === 'EM_PROCESSAMENTO_BPO').length}
              </span>
            </div>

            <div className="space-y-3">
              {tickets
                .filter((t) => t.status === 'EM_PROCESSAMENTO_BPO')
                .map((ticket) => (
                  <div key={ticket.id} className="p-4 rounded-xl bg-concept-dark/80 border border-concept-border hover:border-concept-blue/50 transition-colors space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-concept-muted">{ticket.ticketNumber}</span>
                      {getPriorityBadge(ticket.priority)}
                    </div>
                    <h4 className="text-xs font-bold text-white leading-snug">{ticket.title}</h4>
                    <div className="flex items-center justify-between text-[11px] text-concept-muted pt-2 border-t border-concept-border/40">
                      <span className="text-concept-blue font-semibold">{ticket.category}</span>
                      <span className="flex items-center gap-1 text-concept-blue font-mono">
                        <Clock className="w-3 h-3 animate-spin" />
                        {ticket.slaTime}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Column 3: Concluído */}
        <div className="glass-panel p-4 rounded-2xl border border-concept-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-concept-border mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-concept-accent" />
                <span className="font-bold text-xs text-white">3. Concluído</span>
              </div>
              <span className="text-xs font-mono font-bold text-concept-accent bg-emerald-950/60 px-2 py-0.5 rounded border border-concept-accent/30">
                {tickets.filter((t) => t.status === 'CONCLUIDO').length}
              </span>
            </div>

            <div className="space-y-3">
              {tickets
                .filter((t) => t.status === 'CONCLUIDO')
                .map((ticket) => (
                  <div key={ticket.id} className="p-4 rounded-xl bg-concept-dark/80 border border-concept-border hover:border-concept-accent/50 transition-colors space-y-3 opacity-90">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-concept-muted">{ticket.ticketNumber}</span>
                      <span className="text-[10px] text-concept-accent font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> OK
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white leading-snug">{ticket.title}</h4>
                    <div className="flex items-center justify-between text-[11px] text-concept-muted pt-2 border-t border-concept-border/40">
                      <span className="text-concept-muted">{ticket.category}</span>
                      <span className="text-concept-accent font-mono text-[10px]">Concluído no Prazo</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Ticket Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-concept-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card p-6 rounded-3xl border border-concept-accent/40 max-w-lg w-full text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-concept-border">
              <h3 className="text-lg font-extrabold text-white">Abrir Solicitação BPO</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-xs text-concept-muted hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-4">
              <div>
                <label htmlFor={titleInputId} className="text-xs font-semibold text-concept-muted block mb-1">Título da Solicitação *</label>
                <input
                  id={titleInputId}
                  type="text"
                  required
                  placeholder="Ex: Aprovação de repasse proprietário Ed. Miramar Apt 42"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-concept-dark border border-concept-border rounded-xl px-3 py-2.5 text-xs text-white outline-none focus:border-concept-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor={categorySelectId} className="text-xs font-semibold text-concept-muted block mb-1">Categoria</label>
                  <select
                    id={categorySelectId}
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-concept-dark border border-concept-border rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="Repasse Proprietário">Repasse Proprietário</option>
                    <option value="Condomínio / IPTU">Condomínio / IPTU</option>
                    <option value="Emissão NF-e">Emissão NF-e</option>
                    <option value="Conciliação Bancária">Conciliação Bancária</option>
                    <option value="Solicitação Diversa">Solicitação Diversa</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={prioritySelectId} className="text-xs font-semibold text-concept-muted block mb-1">Prioridade</label>
                  <select
                    id={prioritySelectId}
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full bg-concept-dark border border-concept-border rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="BAIXA">Baixa</option>
                    <option value="MEDIA">Média</option>
                    <option value="ALTA">Alta</option>
                    <option value="URGENTE">Urgente</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full glow-cyan-button py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                <span>Registrar no Workflow BPO</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

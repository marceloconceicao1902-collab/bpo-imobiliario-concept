'use client';

import React, { useState } from 'react';
import { MOCK_REPASSES, MOCK_BOLETOS } from '@/lib/mockData';
import { CheckCircle2, AlertCircle, Clock, FileSpreadsheet, Search } from 'lucide-react';

export const RepassesTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'REPASSES' | 'BOLETOS'>('REPASSES');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepasses = MOCK_REPASSES.filter(
    (r) =>
      r.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.propertyAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getConciliationBadge = (status: string) => {
    switch (status) {
      case 'CONCILIADO':
        return (
          <span className="text-[10px] font-mono font-bold bg-concept-accent/20 text-concept-accent border border-concept-accent/40 px-2.5 py-1 rounded-full flex items-center gap-1 w-max">
            <CheckCircle2 className="w-3 h-3" /> Conciliado
          </span>
        );
      case 'PENDENTE_EXTRATO':
        return (
          <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full flex items-center gap-1 w-max">
            <Clock className="w-3 h-3" /> Aguardando Extrato
          </span>
        );
      case 'DIVERGENTE':
        return (
          <span className="text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-1 rounded-full flex items-center gap-1 w-max">
            <AlertCircle className="w-3 h-3" /> Divergência Identificada
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-tab navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex rounded-xl bg-concept-slate p-1 border border-concept-border">
          <button
            onClick={() => setActiveSubTab('REPASSES')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeSubTab === 'REPASSES' ? 'bg-concept-blue text-white shadow-glow-blue' : 'text-concept-muted hover:text-white'
            }`}
          >
            Gestão de Repasses a Proprietários ({MOCK_REPASSES.length})
          </button>
          <button
            onClick={() => setActiveSubTab('BOLETOS')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
              activeSubTab === 'BOLETOS' ? 'bg-concept-accent text-concept-dark shadow-glow-cyan' : 'text-concept-muted hover:text-white'
            }`}
          >
            Boletos Emitidos & Liquidados ({MOCK_BOLETOS.length})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-concept-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar proprietário ou imóvel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-concept-dark border border-concept-border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-concept-muted focus:border-concept-accent outline-none"
          />
        </div>
      </div>

      {activeSubTab === 'REPASSES' ? (
        <div className="glass-panel rounded-2xl border border-concept-border overflow-hidden">
          <div className="p-4 border-b border-concept-border flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Relatório de Repasses Conciliados do Mês</h3>
            <span className="text-xs font-mono text-concept-accent">Total Liquidador: R$ 215.400,00</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-concept-slate/70 text-concept-muted font-mono uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Proprietário / Beneficiário</th>
                  <th className="p-3">Imóvel Alugado</th>
                  <th className="p-3">Valor Bruto</th>
                  <th className="p-3">Taxa Adm.</th>
                  <th className="p-3">Valor Líquido</th>
                  <th className="p-3">Data Repasse</th>
                  <th className="p-3">Conciliação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-concept-border/40 text-slate-200">
                {filteredRepasses.map((rep) => (
                  <tr key={rep.id} className="hover:bg-concept-slate/30 transition-colors">
                    <td className="p-3 font-semibold text-white">
                      <div>{rep.ownerName}</div>
                      <span className="text-[10px] text-concept-muted font-mono">{rep.bankAccount}</span>
                    </td>
                    <td className="p-3 text-concept-muted">{rep.propertyAddress}</td>
                    <td className="p-3 font-mono">R$ {rep.grossAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td className="p-3 font-mono text-rose-400">- R$ {rep.feeAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td className="p-3 font-mono font-bold text-concept-accent">R$ {rep.netAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td className="p-3 font-mono">{rep.dueDate}</td>
                    <td className="p-3">{getConciliationBadge(rep.conciliationStatus)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="glass-panel rounded-2xl border border-concept-border overflow-hidden">
          <div className="p-4 border-b border-concept-border flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Relatório de Boletos de Aluguel Emitidos</h3>
            <span className="text-xs font-mono text-concept-accent">Arrecadação Mês: R$ 389.200,00</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-concept-slate/70 text-concept-muted font-mono uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Locatário / Pagador</th>
                  <th className="p-3">Valor Boleto</th>
                  <th className="p-3">Vencimento</th>
                  <th className="p-3">Status Cobrança</th>
                  <th className="p-3">Linha Digitável / Código</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-concept-border/40 text-slate-200">
                {MOCK_BOLETOS.map((bol) => (
                  <tr key={bol.id} className="hover:bg-concept-slate/30 transition-colors">
                    <td className="p-3 font-semibold text-white">{bol.tenantName}</td>
                    <td className="p-3 font-mono font-bold text-white">R$ {bol.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td className="p-3 font-mono">{bol.dueDate}</td>
                    <td className="p-3">
                      {bol.status === 'PAGO' ? (
                        <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                          LIQUIDADO
                        </span>
                      ) : bol.status === 'EM_ATRASO' ? (
                        <span className="text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-0.5 rounded-full">
                          EM ATRASO
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2.5 py-0.5 rounded-full">
                          A VENCER
                        </span>
                      )}
                    </td>
                    <td className="p-3 font-mono text-[10px] text-concept-muted select-all">{bol.barCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

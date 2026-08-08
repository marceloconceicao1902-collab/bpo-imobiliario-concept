'use client';

import React from 'react';
import { MOCK_CLIENT_CONTRACTS } from '@/lib/mockData';
import { Building2, ShieldCheck, Layers, Plus } from 'lucide-react';

export const ClientsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Carteira de Clientes Imobiliários ({MOCK_CLIENT_CONTRACTS.length})</h2>
          <p className="text-xs text-concept-muted">Gerenciamento de contratos ativos, planos contratados e serviços adicionais vinculados</p>
        </div>
      </div>

      {/* Roster Table */}
      <div className="glass-panel rounded-2xl border border-concept-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-concept-slate/70 text-concept-muted font-mono uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5">Imobiliária Client / CNPJ</th>
                <th className="p-3.5">Plano Vinculado</th>
                <th className="p-3.5">Volumetria Mês</th>
                <th className="p-3.5">Serviços Adicionais / Add-ons</th>
                <th className="p-3.5">Fatura Mensal</th>
                <th className="p-3.5">Status Contrato</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-concept-border/40 text-slate-200">
              {MOCK_CLIENT_CONTRACTS.map((cli) => (
                <tr key={cli.id} className="hover:bg-concept-slate/30 transition-colors">
                  <td className="p-3.5 font-semibold text-white">
                    <div>{cli.companyName}</div>
                    <span className="text-[10px] text-concept-muted font-mono">CNPJ: {cli.cnpj}</span>
                  </td>
                  <td className="p-3.5">
                    <span className="font-mono text-concept-accent font-bold">{cli.planName}</span>
                  </td>
                  <td className="p-3.5 font-mono">
                    <span className={cli.volumeUsed > cli.volumeLimit ? 'text-amber-400 font-bold' : 'text-white'}>
                      {cli.volumeUsed} / {cli.volumeLimit} movs
                    </span>
                    {cli.overageFee > 0 && (
                      <span className="text-[10px] text-amber-400 block font-semibold">+ R$ 300 excedente</span>
                    )}
                  </td>
                  <td className="p-3.5">
                    <div className="flex flex-wrap gap-1">
                      {cli.addOns.map((add) => (
                        <span key={add} className="text-[9px] bg-concept-dark border border-concept-border px-2 py-0.5 rounded text-concept-muted">
                          {add}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3.5 font-mono font-extrabold text-white">
                    R$ {cli.totalMonthly.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="p-3.5">
                    {cli.status === 'ATIVO' ? (
                      <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                        CONTRATO ATIVO
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2.5 py-0.5 rounded-full">
                        EM IMPLANTAÇÃO
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

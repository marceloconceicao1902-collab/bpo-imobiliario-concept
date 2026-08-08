'use client';

import React, { useState } from 'react';
import { SalesFunnelTab } from './SalesFunnelTab';
import { ClientsTab } from './ClientsTab';
import { OperationsTab } from './OperationsTab';
import { BillingTab } from './BillingTab';
import { Filter, Users, Cpu, DollarSign, ShieldAlert } from 'lucide-react';

export const CRMLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FUNNEL' | 'CLIENTS' | 'OPERATIONS' | 'BILLING'>('FUNNEL');

  return (
    <div className="min-h-screen bg-concept-dark py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation Tabs Header */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-concept-border/60">
          <button
            onClick={() => setActiveTab('FUNNEL')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'FUNNEL'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>1. Funil de Vendas (CRM Comercial)</span>
          </button>

          <button
            onClick={() => setActiveTab('CLIENTS')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'CLIENTS'
                ? 'bg-concept-blue text-white shadow-glow-blue'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>2. Gestão de Clientes & Contratos</span>
          </button>

          <button
            onClick={() => setActiveTab('OPERATIONS')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'OPERATIONS'
                ? 'bg-concept-accent text-concept-dark shadow-glow-cyan'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>3. Mesa de Trabalho BPO (SLA)</span>
          </button>

          <button
            onClick={() => setActiveTab('BILLING')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'BILLING'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>4. Faturamento, Excedentes & DRE</span>
          </button>
        </div>

        {/* Tab Content Rendering */}
        <div className="pt-2">
          {activeTab === 'FUNNEL' && <SalesFunnelTab />}
          {activeTab === 'CLIENTS' && <ClientsTab />}
          {activeTab === 'OPERATIONS' && <OperationsTab />}
          {activeTab === 'BILLING' && <BillingTab />}
        </div>
      </div>
    </div>
  );
};

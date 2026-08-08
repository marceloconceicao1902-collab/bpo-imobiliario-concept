'use client';

import React, { useState } from 'react';
import { OverviewTab } from './OverviewTab';
import { WorkflowTab } from './WorkflowTab';
import { RepassesTab } from './RepassesTab';
import { DelinquencyTab } from './DelinquencyTab';
import { UsageTab } from './UsageTab';
import { DocumentsTab } from './DocumentsTab';
import { LayoutDashboard, CheckSquare, Receipt, AlertCircle, PieChart, Folder } from 'lucide-react';

export const PortalLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'WORKFLOW' | 'REPASSES' | 'DELINQUENCY' | 'USAGE' | 'DOCUMENTS'>('OVERVIEW');

  return (
    <div className="min-h-screen bg-concept-dark py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation Tabs Header */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-concept-border/60">
          <button
            onClick={() => setActiveTab('OVERVIEW')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'OVERVIEW'
                ? 'bg-concept-accent text-concept-dark shadow-glow-cyan'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>1. Dashboard Geral</span>
          </button>

          <button
            onClick={() => setActiveTab('WORKFLOW')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'WORKFLOW'
                ? 'bg-concept-blue text-white shadow-glow-blue'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>2. Central de Solicitações (Workflow)</span>
          </button>

          <button
            onClick={() => setActiveTab('REPASSES')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'REPASSES'
                ? 'bg-concept-blue text-white shadow-glow-blue'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>3. Repasses & Boletos</span>
          </button>

          <button
            onClick={() => setActiveTab('DELINQUENCY')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'DELINQUENCY'
                ? 'bg-rose-600 text-white shadow-lg'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>4. Régua de Cobrança</span>
          </button>

          <button
            onClick={() => setActiveTab('USAGE')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'USAGE'
                ? 'bg-concept-accent text-concept-dark shadow-glow-cyan'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>5. Consumo do Plano</span>
          </button>

          <button
            onClick={() => setActiveTab('DOCUMENTS')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'DOCUMENTS'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-concept-muted hover:text-white hover:bg-concept-slate/60'
            }`}
          >
            <Folder className="w-4 h-4" />
            <span>6. Central de Documentos</span>
          </button>
        </div>

        {/* Tab Content Rendering */}
        <div className="pt-2">
          {activeTab === 'OVERVIEW' && <OverviewTab />}
          {activeTab === 'WORKFLOW' && <WorkflowTab />}
          {activeTab === 'REPASSES' && <RepassesTab />}
          {activeTab === 'DELINQUENCY' && <DelinquencyTab />}
          {activeTab === 'USAGE' && <UsageTab />}
          {activeTab === 'DOCUMENTS' && <DocumentsTab />}
        </div>
      </div>
    </div>
  );
};

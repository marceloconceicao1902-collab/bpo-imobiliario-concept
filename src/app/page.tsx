'use client';

import React, { useState } from 'react';
import { SystemView, ProductType } from '@/lib/types';
import { Header } from '@/components/navigation/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { PainPoints } from '@/components/landing/PainPoints';
import { SolutionsSection } from '@/components/landing/SolutionsSection';
import { Calculator } from '@/components/landing/Calculator';
import { PricingTables } from '@/components/landing/PricingTables';
import { WhyConcept } from '@/components/landing/WhyConcept';
import { LeadForm } from '@/components/landing/LeadForm';
import { Footer } from '@/components/landing/Footer';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { CRMLayout } from '@/components/crm/CRMLayout';

export default function Home() {
  const [currentView, setCurrentView] = useState<SystemView>('LANDING');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedProductForForm, setSelectedProductForForm] = useState<ProductType>('BPO_VOLUME');
  const [selectedPlanName, setSelectedPlanName] = useState('BPO Financeiro (Empresa B)');
  const [selectedPrice, setSelectedPrice] = useState(2290);

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleSelectProductFromSolutions = (prod: ProductType) => {
    setSelectedProductForForm(prod);
    const calculatorElement = document.getElementById('calculadora');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProposalFromCalculator = (params: {
    product: ProductType;
    value: number;
    planName: string;
    totalMonthly: number;
  }) => {
    setSelectedProductForForm(params.product);
    setSelectedPlanName(params.planName);
    setSelectedPrice(params.totalMonthly);
    setIsLeadModalOpen(true);
  };

  const handleSelectPlanFromPricing = (planName: string, price: number) => {
    setSelectedPlanName(planName);
    setSelectedPrice(price);
    setIsLeadModalOpen(true);
  };

  const handleLeadSubmitSuccess = (leadData: any) => {
    console.log('Lead cadastrado no CRM:', leadData);
  };

  return (
    <main className="min-h-screen bg-concept-dark text-white font-sans selection:bg-concept-accent selection:text-concept-dark flex flex-col justify-between">
      {/* Global Application Header with View Switcher */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Main View Renderer */}
      <div className="flex-grow">
        {currentView === 'LANDING' && (
          <>
            <HeroSection
              onOpenCalculator={() => {
                const calc = document.getElementById('calculadora');
                if (calc) calc.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenLeadModal={handleOpenLeadModal}
            />

            <PainPoints />

            <SolutionsSection onSelectProduct={handleSelectProductFromSolutions} />

            <Calculator
              initialProduct={selectedProductForForm}
              onOpenProposalModal={handleOpenProposalFromCalculator}
            />

            <PricingTables onSelectPlan={handleSelectPlanFromPricing} />

            <WhyConcept />

            {/* Lead Form Inline Section */}
            <section className="py-20 bg-concept-slate/20 border-t border-concept-border/40 px-4">
              <div className="max-w-4xl mx-auto text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-concept-accent block">
                  Pronto para Transformar seu Financeiro?
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Fale com Nossos Especialistas em BPO Imobiliário
                </h2>
                <div className="pt-6">
                  <LeadForm
                    initialProduct={selectedProductForForm}
                    initialPlanName={selectedPlanName}
                    initialPrice={selectedPrice}
                    onSubmitSuccess={handleLeadSubmitSuccess}
                  />
                </div>
              </div>
            </section>

            <Footer onViewChange={setCurrentView} />
          </>
        )}

        {currentView === 'PORTAL' && <PortalLayout />}

        {currentView === 'CRM' && <CRMLayout />}
      </div>

      {/* Standalone Lead Proposal Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 bg-concept-dark/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl">
            <LeadForm
              initialProduct={selectedProductForForm}
              initialPlanName={selectedPlanName}
              initialPrice={selectedPrice}
              onSubmitSuccess={handleLeadSubmitSuccess}
              onClose={() => setIsLeadModalOpen(false)}
            />
          </div>
        </div>
      )}
    </main>
  );
}

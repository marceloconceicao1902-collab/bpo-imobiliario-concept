'use client';

import React, { useState } from 'react';
import { UserRole, ProductType } from '@/lib/types';
import { Header } from '@/components/navigation/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { PainPoints } from '@/components/landing/PainPoints';
import { SolutionsSection } from '@/components/landing/SolutionsSection';
import { Calculator } from '@/components/landing/Calculator';
import { PricingTables } from '@/components/landing/PricingTables';
import { FAQSection } from '@/components/landing/FAQSection';
import { WhyConcept } from '@/components/landing/WhyConcept';
import { LeadForm } from '@/components/landing/LeadForm';
import { Footer } from '@/components/landing/Footer';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { CRMLayout } from '@/components/crm/CRMLayout';
import { AuthModal } from '@/components/auth/AuthModal';

export default function Home() {
  const [userRole, setUserRole] = useState<UserRole>('GUEST');
  const [userInfo, setUserInfo] = useState<{ name: string; email: string; company?: string }>({
    name: '',
    email: '',
    company: '',
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalInitialRole, setAuthModalInitialRole] = useState<'CLIENT' | 'ADMIN'>('CLIENT');

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedProductForForm, setSelectedProductForForm] = useState<ProductType>('BPO_VOLUME');
  const [selectedPlanName, setSelectedPlanName] = useState('BPO Financeiro (Empresa B)');
  const [selectedPrice, setSelectedPrice] = useState(2290);

  const handleOpenAuthModal = (role: 'CLIENT' | 'ADMIN' = 'CLIENT') => {
    setAuthModalInitialRole(role);
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (role: 'CLIENT' | 'ADMIN', userDetails: { name: string; email: string; company?: string }) => {
    setUserRole(role);
    setUserInfo(userDetails);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUserRole('GUEST');
    setUserInfo({ name: '', email: '', company: '' });
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
    console.log('Lead registrado no funil comercial:', leadData);
  };

  return (
    <main className="min-h-screen bg-concept-dark text-white font-sans selection:bg-concept-accent selection:text-concept-dark flex flex-col justify-between">
      {/* Global Clean Header */}
      <Header
        userRole={userRole}
        userName={userInfo.name}
        userCompany={userInfo.company}
        onOpenAuthModal={handleOpenAuthModal}
        onLogout={handleLogout}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* Main View Renderer based on Authentication Role */}
      <div className="flex-grow">
        {userRole === 'GUEST' && (
          <>
            <HeroSection
              onOpenCalculator={() => {
                const calc = document.getElementById('calculadora');
                if (calc) calc.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            <PainPoints />

            <div id="solucoes">
              <SolutionsSection onSelectProduct={handleSelectProductFromSolutions} />
            </div>

            <Calculator
              initialProduct={selectedProductForForm}
              onOpenProposalModal={handleOpenProposalFromCalculator}
            />

            <div id="planos">
              <PricingTables onSelectPlan={handleSelectPlanFromPricing} />
            </div>

            <WhyConcept />

            <FAQSection />

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

            <Footer onOpenAuthModal={handleOpenAuthModal} />
          </>
        )}

        {userRole === 'CLIENT' && <PortalLayout />}

        {userRole === 'ADMIN' && <CRMLayout />}
      </div>

      {/* Authentication Modal (Imobiliária vs Admin) */}
      {isAuthModalOpen && (
        <AuthModal
          initialRole={authModalInitialRole}
          onLoginSuccess={handleLoginSuccess}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}

      {/* Lead Proposal Modal */}
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

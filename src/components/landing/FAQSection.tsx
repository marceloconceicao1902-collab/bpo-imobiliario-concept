'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a conciliação bancária em múltiplas contas segregadas?',
    answer:
      'Nossa equipe importa diariamente os extratos no formato OFX diretamente das suas contas de movimentação, garantia e retenção. Realizamos o batimento de cada boleto quitado x comissão da imobiliária x repasse líquido ao proprietário, garantindo 100% de conformidade auditável.',
  },
  {
    question: 'O que acontece se a minha imobiliária estourar a franquia de movimentações do plano?',
    answer:
      'Caso o volume de lançamentos ultrapasse a faixa base do plano (ex: ultrapassar 450 movimentações no Plano Empresa B), o sistema calcula automaticamente uma taxa de excedente de apenas R$ 300,00 por lote adicional de 100 lançamentos. Sem multas ou interrupções no serviço.',
  },
  {
    question: 'Como a Concept Gestão atua na régua de cobrança dos locatários inadimplentes?',
    answer:
      'Disparamos notificações automatizadas e preventivas via WhatsApp e e-mail antes e após o vencimento (D-3, D+1, D+5 e D+15). Em caso de atraso persistente, nossos analistas de cobrança iniciam contato humanizado para negociação extrajudicial.',
  },
  {
    question: 'Como garantimos a segurança dos repasses aos proprietários de imóveis?',
    answer:
      'Os repasses são pré-agendados com validação de SLA rígido (processados impreterivelmente até as 14h do dia estipulado). A imobiliária mantém o controle total e aprovação final de qualquer pagamento de condomínio ou IPTU antes do envio bancário.',
  },
  {
    question: 'É necessário migrar ou trocar o sistema ERP que minha imobiliária já utiliza?',
    answer:
      'Não! A Concept Gestão se integra nativamente aos principais ERPs imobiliários do mercado (Superlógica, Vista, Kenlo, AlugaBrasil, entre outros), atuando como a retaguarda operacional da sua plataforma atual.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-concept-dark relative border-t border-concept-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-concept-accent/15 text-concept-accent border border-concept-accent/30 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Perguntas Frequentes (FAQ)</h2>
          <p className="text-xs text-concept-muted">
            Entenda como a Concept Gestão assume o operacional financeiro da sua imobiliária com total transparência.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-concept-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-concept-accent transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-concept-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-concept-muted leading-relaxed border-t border-concept-border/40 pt-3 bg-concept-dark/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

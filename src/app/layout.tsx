import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concept Gestão • Plataforma SaaS BPO Financeiro Imobiliário',
  description:
    'Plataforma SaaS BPO Financeiro para Imobiliárias. Terceirização de contas a pagar, contas a receber, conciliação bancária multi-contas, repasses a proprietários e régua de cobrança de locatários.',
  keywords: [
    'BPO Financeiro Imobiliária',
    'Concept Gestão',
    'Conciliação Bancária Imobiliária',
    'Repasse Proprietário',
    'Régua de Cobrança Aluguel',
    'SaaS BPO',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-concept-dark text-concept-text antialiased selection:bg-concept-accent selection:text-concept-dark">
        {children}
      </body>
    </html>
  );
}

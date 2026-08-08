import { VolumeTier, RevenueTier, AddOnService } from './types';

export const OVERAGE_FEE_PER_BRACKET = 300.0; // R$ 300 adicionais por faixa de excedente estourada

export const VOLUME_TIERS: VolumeTier[] = [
  {
    id: 'empresa_a',
    name: 'Empresa A (Até 80 movs)',
    maxTransactions: 80,
    price: 1990,
    overageRule: '+ R$ 300 de excedente se estourar faixa (R$ 2.290)',
    description: 'Ideal para imobiliárias e administradoras em fase inicial de estruturação financeira.',
  },
  {
    id: 'empresa_b',
    name: 'Empresa B (Até 450 movs)',
    maxTransactions: 450,
    price: 2290,
    overageRule: '+ R$ 300 de excedente se estourar faixa (R$ 2.590)',
    description: 'Recomendado para imobiliárias em consolidação com alto volume de repasses e boletos.',
  },
  {
    id: 'empresa_c',
    name: 'Empresa C (Até 900 movs)',
    maxTransactions: 900,
    price: 2690,
    overageRule: '+ R$ 300 de excedente se estourar faixa (R$ 2.990)',
    description: 'Para grandes administradoras de carteiras de locação e vendas de alto volume.',
  },
];

export const REVENUE_TIERS: RevenueTier[] = [
  {
    id: 'start',
    name: 'Start',
    maxRevenue: 100000, // Até R$ 100k
    price: 990,
    description: 'Até R$ 100 mil/mês em carteira processada. Régua de cobrança automatizada.',
  },
  {
    id: 'growth',
    name: 'Growth',
    maxRevenue: 500000, // R$ 100k a R$ 500k
    price: 1990,
    description: 'R$ 100 mil a R$ 500 mil/mês. Gestão completa de recebimento e recuperação ativa.',
  },
  {
    id: 'performance',
    name: 'Performance',
    maxRevenue: 2000000, // R$ 500k a R$ 2M
    price: 3990,
    description: 'R$ 500 mil a R$ 2 milhões/mês. Atendimento dedicado e conciliação em múltiplos bancos.',
  },
];

export const ADD_ON_SERVICES: AddOnService[] = [
  {
    id: 'cfo_as_a_service',
    title: 'CFO as a Service',
    badge: 'Assessoria Estratégica',
    description: 'Acompanhamento executivo de métricas, indicadores financeiros, margem de contribuição e reuniões trimestrais com diretores.',
    priceModel: 'Sob Consulta / Mensal',
    iconName: 'TrendingUp',
  },
  {
    id: 'controladoria',
    title: 'Controladoria Financeira',
    badge: 'Projeto',
    description: 'Estruturação de DRE por centro de custo, auditoria de processos e governança para imobiliárias em expansão.',
    priceModel: 'Projeto sob demanda',
    iconName: 'ShieldCheck',
  },
  {
    id: 'planejamento_orcamentario',
    title: 'Planejamento Orçamentário',
    badge: 'Projeto',
    description: 'Modelagem orçamentária anual, projeção de fluxo de caixa futuro e planejamento de investimento em expansão de carteira.',
    priceModel: 'Projeto sob demanda',
    iconName: 'PieChart',
  },
  {
    id: 'implantacao_erp',
    title: 'Implantação de ERP Imobiliário',
    badge: 'Projeto',
    description: 'Parametrização, integração e migração completa de dados para ERPs imobiliários (Superlógica, Vista, Kenlo, entre outros).',
    priceModel: 'Projeto sob demanda',
    iconName: 'Cpu',
  },
  {
    id: 'folha_pagamento',
    title: 'Folha de Pagamento (HubParceiros)',
    badge: 'Recorrente',
    description: 'Gestão integrada de departamento pessoal, folha de pagamento de corretores e colaboradores com parceiros credenciados.',
    priceModel: 'Adicional por colaborador',
    iconName: 'Users',
  },
  {
    id: 'gestao_contrato_bpo',
    title: 'Gestão de Contratos BPO',
    badge: 'Recorrente',
    description: 'Auditoria de reajustes contratuais de aluguel (IGP-M/IPCA), controle de vencimentos e renovações automatizadas.',
    priceModel: 'Adicional por contrato',
    iconName: 'FileText',
  },
];

export const REAL_ESTATE_PAIN_POINTS = [
  {
    number: '01',
    title: 'Alto volume de boletos e repasses a proprietários',
    description: 'Centenas de boletos emitidos e repasses individuais a proprietários geram sobrecarga diária e risco constante de erros manuais.',
    iconName: 'Receipt',
  },
  {
    number: '02',
    title: 'Conciliação em múltiplas contas segregadas',
    description: 'Dificuldade de conciliar extratos de diferentes bancos, contas de garantia, taxas de administração e contas de retenção de terceiros.',
    iconName: 'Building2',
  },
  {
    number: '03',
    title: 'Inadimplência sem controle estruturado',
    description: 'Falta de uma régua automatizada e persistente para cobrança de locatários em atraso, gerando rombos no fluxo de caixa.',
    iconName: 'AlertCircle',
  },
  {
    number: '04',
    title: 'Dificuldade de prever fluxo de caixa e repasses',
    description: 'Incerteza sobre a liquidez real da imobiliária após dedução das comissões, taxas de sinistro, condomínios e repasses agendados.',
    iconName: 'BarChart3',
  },
];

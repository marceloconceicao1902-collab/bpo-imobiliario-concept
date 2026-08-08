// TypeScript Interfaces & Types for Concept Gestão SaaS

export type SystemView = 'LANDING' | 'PORTAL' | 'CRM';

export type ProductType = 'BPO_VOLUME' | 'GESTÃO_RECEBIVEIS';

export interface VolumeTier {
  id: string;
  name: string;
  maxTransactions: number;
  price: number;
  overageRule: string;
  description: string;
}

export interface RevenueTier {
  id: string;
  name: string;
  maxRevenue: number;
  price: number;
  description: string;
}

export interface AddOnService {
  id: string;
  title: string;
  badge: string;
  description: string;
  priceModel: string;
  iconName: string;
}

export interface CalculatorResult {
  productType: ProductType;
  tierName: string;
  basePrice: number;
  limitLabel: string;
  usedVolumeOrRevenue: number;
  isOverLimit: boolean;
  overageBrackets: number;
  overageFee: number;
  totalMonthly: number;
  recommendedFor: string;
}

export interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  realEstateName: string;
  estimatedVolume: number;
  estimatedRevenue: number;
  stage: 'LEAD_RECEBIDO' | 'REUNIAO_AGENDADA' | 'PROPOSTA_ENVIADA' | 'EM_NEGOCIACAO' | 'CONTRATO_FECHADO';
  product: ProductType;
  createdAt: string;
  proposedPrice: number;
}

export interface BPOTicketItem {
  id: string;
  ticketNumber: string;
  title: string;
  category: 'Repasse Proprietário' | 'Condomínio / IPTU' | 'Emissão NF-e' | 'Conciliação Bancária' | 'Solicitação Diversa';
  status: 'PENDENTE_IMOBILIARIA' | 'EM_PROCESSAMENTO_BPO' | 'CONCLUIDO';
  priority: 'BAIXA' | 'MEDIA' | 'ALTA' | 'URGENTE';
  slaTime: string;
  isViolated?: boolean;
  createdAt: string;
}

export interface RepasseItem {
  id: string;
  ownerName: string;
  propertyAddress: string;
  grossAmount: number;
  feeAmount: number;
  netAmount: number;
  dueDate: string;
  conciliationStatus: 'CONCILIADO' | 'PENDENTE_EXTRATO' | 'DIVERGENTE';
  bankAccount: string;
}

export interface BoletoItem {
  id: string;
  tenantName: string;
  amount: number;
  dueDate: string;
  status: 'PAGO' | 'EM_ATRASO' | 'AGUARDANDO';
  barCode: string;
}

export interface DelinquentItem {
  id: string;
  tenantName: string;
  propertyAddress: string;
  ownerName: string;
  debtAmount: number;
  daysOverdue: number;
  debtStage: 'Lembrete Preventivo' | 'Notificação de Atraso' | 'Cobrança Extrajudicial' | 'Acordo em Andamento' | 'Jurídico';
  lastActionDate: string;
}

export interface ClientContractItem {
  id: string;
  companyName: string;
  tradeName: string;
  cnpj: string;
  planName: string;
  volumeUsed: number;
  volumeLimit: number;
  basePrice: number;
  overageFee: number;
  totalMonthly: number;
  status: 'ATIVO' | 'EM_IMPLANTACAO' | 'SUSPENSO';
  joinedDate: string;
  addOns: string[];
}

export interface DocumentItem {
  id: string;
  fileName: string;
  fileType: 'OFX' | 'PDF' | 'IMAGE';
  fileSize: string;
  category: 'Extrato Bancário' | 'Comprovante' | 'Nota Fiscal';
  uploadedAt: string;
}

import { ProductType, CalculatorResult } from './types';
import { VOLUME_TIERS, REVENUE_TIERS, OVERAGE_FEE_PER_BRACKET } from './constants';

export function calculatePlan(
  productType: ProductType,
  value: number // number of transactions for BPO_VOLUME OR monthly revenue in BRL for GESTÃO_RECEBIVEIS
): CalculatorResult {
  if (productType === 'BPO_VOLUME') {
    // 1. Volume-based calculations
    const volume = Math.max(0, value);
    let selectedTier = VOLUME_TIERS[0]; // default Empresa A

    if (volume <= 80) {
      selectedTier = VOLUME_TIERS[0]; // Empresa A (up to 80)
    } else if (volume <= 450) {
      selectedTier = VOLUME_TIERS[1]; // Empresa B (up to 450)
    } else {
      selectedTier = VOLUME_TIERS[2]; // Empresa C (up to 900)
    }

    const basePrice = selectedTier.price;
    let overageBrackets = 0;
    let overageFee = 0;

    // Check if current volume exceeds tier's base limit
    if (volume > selectedTier.maxTransactions) {
      // Calculate brackets of excess (each bracket = 100 tx or tier overflow)
      const excessTx = volume - selectedTier.maxTransactions;
      overageBrackets = Math.ceil(excessTx / 100);
      overageFee = overageBrackets * OVERAGE_FEE_PER_BRACKET;
    }

    return {
      productType: 'BPO_VOLUME',
      tierName: selectedTier.name,
      basePrice,
      limitLabel: `Até ${selectedTier.maxTransactions} movimentações/mês`,
      usedVolumeOrRevenue: volume,
      isOverLimit: volume > selectedTier.maxTransactions,
      overageBrackets,
      overageFee,
      totalMonthly: basePrice + overageFee,
      recommendedFor: selectedTier.description,
    };
  } else {
    // 2. Revenue-based calculations
    const revenue = Math.max(0, value);
    let selectedTier = REVENUE_TIERS[0]; // default Start

    if (revenue <= 100000) {
      selectedTier = REVENUE_TIERS[0]; // Start (Até 100k)
    } else if (revenue <= 500000) {
      selectedTier = REVENUE_TIERS[1]; // Growth (100k - 500k)
    } else {
      selectedTier = REVENUE_TIERS[2]; // Performance (500k - 2M)
    }

    const basePrice = selectedTier.price;
    let overageBrackets = 0;
    let overageFee = 0;

    // If revenue exceeds R$ 2M performance cap
    if (revenue > selectedTier.maxRevenue) {
      const excessRev = revenue - selectedTier.maxRevenue;
      overageBrackets = Math.ceil(excessRev / 250000);
      overageFee = overageBrackets * OVERAGE_FEE_PER_BRACKET;
    }

    return {
      productType: 'GESTÃO_RECEBIVEIS',
      tierName: `Plano ${selectedTier.name}`,
      basePrice,
      limitLabel: `Até R$ ${(selectedTier.maxRevenue / 1000).toLocaleString('pt-BR')}k/mês de faturamento`,
      usedVolumeOrRevenue: revenue,
      isOverLimit: revenue > selectedTier.maxRevenue,
      overageBrackets,
      overageFee,
      totalMonthly: basePrice + overageFee,
      recommendedFor: selectedTier.description,
    };
  }
}

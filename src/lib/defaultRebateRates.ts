import type { RebateRateItem } from "@/types";

// Standard pre-populated initial rebate rates for all 5 microfinance products:
// Jagoron, Agrossor, Buniyed, Sufolon, MFCE
// Across all durations: Week (1-46), Month (1-12), 1.5 Year (1-18), 2 Year (1-24)
export const DEFAULT_REBATE_RATES: RebateRateItem[] = [
  // ==========================================
  // 1. JAGORON
  // ==========================================
  // Jagoron Week (1 to 46 installments)
  ...Array.from({ length: 46 }, (_, i) => {
    const kisti = i + 1;
    const rate = kisti <= 2 ? "0.00" : (kisti * 2.65).toFixed(2);
    return {
      id: 100 + kisti,
      product: "Jagoron",
      duration: "Week",
      kisti,
      helper: `Jagoron|Week|${kisti}`,
      rate,
    };
  }),
  // Jagoron Month (1 to 12 installments)
  ...Array.from({ length: 12 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 10.2).toFixed(2);
    return {
      id: 200 + kisti,
      product: "Jagoron",
      duration: "Month",
      kisti,
      helper: `Jagoron|Month|${kisti}`,
      rate,
    };
  }),
  // Jagoron 1.5 Year (1 to 18 installments)
  ...Array.from({ length: 18 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 10.7).toFixed(2);
    return {
      id: 300 + kisti,
      product: "Jagoron",
      duration: "1.5 Year",
      kisti,
      helper: `Jagoron|1.5 Year|${kisti}`,
      rate,
    };
  }),
  // Jagoron 2 Year (1 to 24 installments)
  ...Array.from({ length: 24 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 11.2).toFixed(2);
    return {
      id: 350 + kisti,
      product: "Jagoron",
      duration: "2 Year",
      kisti,
      helper: `Jagoron|2 Year|${kisti}`,
      rate,
    };
  }),

  // ==========================================
  // 2. AGROSSOR
  // ==========================================
  // Agrossor Week (1 to 46 installments)
  ...Array.from({ length: 46 }, (_, i) => {
    const kisti = i + 1;
    const rate = kisti <= 2 ? "0.00" : (kisti * 2.66).toFixed(2);
    return {
      id: 400 + kisti,
      product: "Agrossor",
      duration: "Week",
      kisti,
      helper: `Agrossor|Week|${kisti}`,
      rate,
    };
  }),
  // Agrossor Month (1 to 12 installments)
  ...Array.from({ length: 12 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 10.5).toFixed(2);
    return {
      id: 450 + kisti,
      product: "Agrossor",
      duration: "Month",
      kisti,
      helper: `Agrossor|Month|${kisti}`,
      rate,
    };
  }),
  // Agrossor 1.5 Year (1 to 18 installments)
  ...Array.from({ length: 18 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 11.0).toFixed(2);
    return {
      id: 470 + kisti,
      product: "Agrossor",
      duration: "1.5 Year",
      kisti,
      helper: `Agrossor|1.5 Year|${kisti}`,
      rate,
    };
  }),
  // Agrossor 2 Year (1 to 24 installments)
  ...Array.from({ length: 24 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 11.5).toFixed(2);
    return {
      id: 490 + kisti,
      product: "Agrossor",
      duration: "2 Year",
      kisti,
      helper: `Agrossor|2 Year|${kisti}`,
      rate,
    };
  }),

  // ==========================================
  // 3. BUNIYED
  // ==========================================
  // Buniyed Week (1 to 46 installments)
  ...Array.from({ length: 46 }, (_, i) => {
    const kisti = i + 1;
    const rate = kisti <= 2 ? "0.00" : (kisti * 2.05).toFixed(2);
    return {
      id: 600 + kisti,
      product: "Buniyed",
      duration: "Week",
      kisti,
      helper: `Buniyed|Week|${kisti}`,
      rate,
    };
  }),
  // Buniyed Month (1 to 12 installments)
  ...Array.from({ length: 12 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 8.0).toFixed(2);
    return {
      id: 650 + kisti,
      product: "Buniyed",
      duration: "Month",
      kisti,
      helper: `Buniyed|Month|${kisti}`,
      rate,
    };
  }),
  // Buniyed 1.5 Year (1 to 18 installments)
  ...Array.from({ length: 18 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 8.5).toFixed(2);
    return {
      id: 670 + kisti,
      product: "Buniyed",
      duration: "1.5 Year",
      kisti,
      helper: `Buniyed|1.5 Year|${kisti}`,
      rate,
    };
  }),

  // ==========================================
  // 4. SUFOLON
  // ==========================================
  // Sufolon Week (1 to 46 installments)
  ...Array.from({ length: 46 }, (_, i) => {
    const kisti = i + 1;
    const rate = kisti <= 2 ? "0.00" : (kisti * 2.2).toFixed(2);
    return {
      id: 700 + kisti,
      product: "Sufolon",
      duration: "Week",
      kisti,
      helper: `Sufolon|Week|${kisti}`,
      rate,
    };
  }),
  // Sufolon Month (1 to 12 installments)
  ...Array.from({ length: 12 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 8.5).toFixed(2);
    return {
      id: 750 + kisti,
      product: "Sufolon",
      duration: "Month",
      kisti,
      helper: `Sufolon|Month|${kisti}`,
      rate,
    };
  }),
  // Sufolon 1.5 Year (1 to 18 installments)
  ...Array.from({ length: 18 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 9.0).toFixed(2);
    return {
      id: 770 + kisti,
      product: "Sufolon",
      duration: "1.5 Year",
      kisti,
      helper: `Sufolon|1.5 Year|${kisti}`,
      rate,
    };
  }),

  // ==========================================
  // 5. MFCE
  // ==========================================
  // MFCE Week (1 to 46 installments)
  ...Array.from({ length: 46 }, (_, i) => {
    const kisti = i + 1;
    const rate = kisti <= 2 ? "0.00" : (kisti * 2.5).toFixed(2);
    return {
      id: 800 + kisti,
      product: "MFCE",
      duration: "Week",
      kisti,
      helper: `MFCE|Week|${kisti}`,
      rate,
    };
  }),
  // MFCE Month (1 to 12 installments)
  ...Array.from({ length: 12 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 9.8).toFixed(2);
    return {
      id: 850 + kisti,
      product: "MFCE",
      duration: "Month",
      kisti,
      helper: `MFCE|Month|${kisti}`,
      rate,
    };
  }),
  // MFCE 1.5 Year (1 to 18 installments)
  ...Array.from({ length: 18 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 10.2).toFixed(2);
    return {
      id: 870 + kisti,
      product: "MFCE",
      duration: "1.5 Year",
      kisti,
      helper: `MFCE|1.5 Year|${kisti}`,
      rate,
    };
  }),
  // MFCE 2 Year (1 to 24 installments)
  ...Array.from({ length: 24 }, (_, i) => {
    const kisti = i + 1;
    const rate = (kisti * 10.8).toFixed(2);
    return {
      id: 890 + kisti,
      product: "MFCE",
      duration: "2 Year",
      kisti,
      helper: `MFCE|2 Year|${kisti}`,
      rate,
    };
  }),
];

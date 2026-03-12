/**
 * ─────────────────────────────────────────────────────────────
 *  THE CAPITAL PROPERTY — Payment Plans Data
 *  Add a new payment plan here and it automatically appears
 *  on the payment plan page at /payment/[slug]
 *  Also links from the navbar Payment Plan dropdown.
 * ─────────────────────────────────────────────────────────────
 */

export const paymentPlans = [
  {
    // ── Identifiers ──────────────────────────────────────────
    slug: "lahore-future-city",
    projectName: "Lahore Future City",
    subtitle: "Residential Plots Payment Plan 2026",
    location: "Sharaqpur Road, Lahore",
    heroImage: "/images/Lahore-future-city1.jpeg",
    tag: "Featured",
    tagline: "Own your dream plot with easy 48-month installments",

    // ── Contact info shown on page ────────────────────────────
    phone: "03057338294",
    whatsapp: "03057338294",
    website: "thecapitalproperty.com",

    // ── Note shown below the table ────────────────────────────
    note: "These prices were updated on March 2026. For latest prices, call/WhatsApp on given number.",

    // ── Payment plan table ────────────────────────────────────
    // columns: plotSize, totalPrice, downPayment, monthly, halfYearly, balloting
    plans: [
      {
        size: "3 Marla",
        totalPrice: "1,125,000",
        downPayment: "225,000",
        monthly: "10,000",
        halfYearly: "20,000",
        balloting: "240,000",
        monthlyCount: 48,
        halfYearlyCount: 8,
        popular: false,
      },
      {
        size: "5 Marla",
        totalPrice: "1,825,000",
        downPayment: "300,000",
        monthly: "18,000",
        halfYearly: "32,000",
        balloting: "370,000",
        monthlyCount: 48,
        halfYearlyCount: 8,
        popular: true,
      },
      {
        size: "10 Marla",
        totalPrice: "3,550,000",
        downPayment: "650,000",
        monthly: "35,000",
        halfYearly: "75,000",
        balloting: "560,000",
        monthlyCount: 48,
        halfYearlyCount: 8,
        popular: false,
      },
      {
        size: "20 Marla",
        totalPrice: "6,900,000",
        downPayment: "1,150,000",
        monthly: "75,000",
        halfYearly: "155,000",
        balloting: "760,000",
        monthlyCount: 48,
        halfYearlyCount: 8,
        popular: false,
      },
    ],

    // ── Key highlights shown as pills ─────────────────────────
    highlights: [
      { icon: "📅", label: "48 Monthly Installments" },
      { icon: "💰", label: "Easy Down Payment" },
      { icon: "🏗️", label: "LDA Approved" },
      { icon: "📍", label: "Prime Location" },
    ],

    // ── SEO ───────────────────────────────────────────────────
    metaTitle: "Lahore Future City Payment Plan 2026 — The Capital Property",
    metaDescription:
      "Lahore Future City residential plots available in 3, 5, 10 & 20 Marla. Easy 48-month installment plan starting from PKR 10,000/month.",
  },

  // ── ADD MORE PAYMENT PLANS BELOW ─────────────────────────────
  // {
  //   slug: "aljalil-garden",
  //   projectName: "AlJalil Garden",
  //   subtitle: "Residential Plots Payment Plan 2026",
  //   ...
  // },
];

/** Get a single payment plan by slug */
export function getPaymentPlan(slug) {
  return paymentPlans.find((p) => p.slug === slug) ?? null;
}

/** Get all slugs for generateStaticParams */
export function getAllPaymentPlanSlugs() {
  return paymentPlans.map((p) => ({ slug: p.slug }));
}

export default paymentPlans;

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPaymentPlan, getAllPaymentPlanSlugs } from "../../lib/paymentPlans";
import Navbar from "@/app/components/layout/navBar";
import Footer from "@/app/components/layout/footer";

export function generateStaticParams() {
  return getAllPaymentPlanSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const plan = getPaymentPlan(slug);
  if (!plan) return {};
  return {
    title: plan.metaTitle,
    description: plan.metaDescription,
  };
}

export default async function PaymentPlanPage({ params }) {
  const { slug } = await params;
  const plan = getPaymentPlan(slug);
  if (!plan) notFound();

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={plan.heroImage}
            alt={plan.projectName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#082718]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082718]/95 via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent opacity-60 z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-[#C9A96E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#C9A96E]">Payment Plan</span>
          </div>
          <span className="inline-block bg-[#C9A96E] text-[#082718] text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-3">
            Payment Plan
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight mb-2 drop-shadow-lg">
            {plan.projectName}
          </h1>
          <p className="text-[#C9A96E] text-sm font-medium tracking-wide">
            {plan.subtitle}
          </p>
        </div>
      </section>

      {/* ── Highlight pills ── */}
      <section className="bg-[#0D3D2A] py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-4">
          {plan.highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 text-white/80 text-xs tracking-wide"
            >
              <span className="text-base">{h.icon}</span>
              <span>{h.label}</span>
              <span className="text-[#C9A96E]/30 hidden sm:inline">|</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cards Section ── */}
      <section className="py-16 md:py-24 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                Choose Your Plot
              </span>
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#0D3D2A] mb-3">
              Select a <span className="italic text-[#C9A96E]">Plot Size</span>
            </h2>
            <p className="text-[#777] text-sm max-w-lg mx-auto">
              {plan.tagline}
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plan.plans.map((p, i) => (
              <div
                key={p.size}
                className={`relative flex flex-col rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  p.popular
                    ? "bg-[#0D3D2A] border-2 border-[#C9A96E] shadow-xl"
                    : "bg-white border border-[#E5E0D8] hover:border-[#C9A96E]"
                }`}
              >
                {/* Popular badge */}
                {p.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#C9A96E] text-[#082718] text-[9px] font-bold tracking-widest uppercase text-center py-1.5">
                    ★ Most Popular
                  </div>
                )}

                {/* Card header */}
                <div
                  className={`px-6 pt-${p.popular ? "10" : "6"} pb-5 border-b ${p.popular ? "border-[#C9A96E]/20 pt-10" : "border-[#F0EBE3]"}`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-widest font-semibold mb-1 ${p.popular ? "text-[#C9A96E]/60" : "text-[#999]"}`}
                  >
                    Plot Size
                  </p>
                  <p
                    className={`font-display text-4xl font-semibold ${p.popular ? "text-[#C9A96E]" : "text-[#0D3D2A]"}`}
                  >
                    {p.size}
                  </p>
                  <div
                    className={`mt-3 pt-3 border-t ${p.popular ? "border-[#C9A96E]/20" : "border-[#F0EBE3]"}`}
                  >
                    <p
                      className={`text-[10px] uppercase tracking-widest mb-0.5 ${p.popular ? "text-white/40" : "text-[#999]"}`}
                    >
                      Total Price
                    </p>
                    <p
                      className={`font-display text-xl font-semibold ${p.popular ? "text-white" : "text-[#0D3D2A]"}`}
                    >
                      PKR {p.totalPrice}
                    </p>
                  </div>
                </div>

                {/* Payment breakdown */}
                <div className="flex-1 px-6 py-5 space-y-4">
                  {/* Monthly */}
                  <div
                    className={`rounded-sm p-4 ${p.popular ? "bg-white/10" : "bg-[#F8F5EF]"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className={`text-[10px] uppercase tracking-widest font-semibold ${p.popular ? "text-[#C9A96E]/70" : "text-[#999]"}`}
                      >
                        Monthly
                      </p>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${p.popular ? "bg-[#C9A96E]/20 text-[#C9A96E]" : "bg-[#0D3D2A]/10 text-[#0D3D2A]"}`}
                      >
                        ×{p.monthlyCount}
                      </span>
                    </div>
                    <p
                      className={`font-display text-2xl font-bold ${p.popular ? "text-white" : "text-[#0D3D2A]"}`}
                    >
                      {p.monthly}
                      <span
                        className={`text-xs font-normal ml-1 ${p.popular ? "text-white/50" : "text-[#999]"}`}
                      >
                        PKR
                      </span>
                    </p>
                  </div>

                  {/* Half Yearly */}
                  <div
                    className={`rounded-sm p-4 ${p.popular ? "bg-white/10" : "bg-[#F8F5EF]"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className={`text-[10px] uppercase tracking-widest font-semibold ${p.popular ? "text-[#C9A96E]/70" : "text-[#999]"}`}
                      >
                        Half Yearly
                      </p>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${p.popular ? "bg-[#C9A96E]/20 text-[#C9A96E]" : "bg-[#0D3D2A]/10 text-[#0D3D2A]"}`}
                      >
                        ×{p.halfYearlyCount}
                      </span>
                    </div>
                    <p
                      className={`font-display text-2xl font-bold ${p.popular ? "text-white" : "text-[#0D3D2A]"}`}
                    >
                      {p.halfYearly}
                      <span
                        className={`text-xs font-normal ml-1 ${p.popular ? "text-white/50" : "text-[#999]"}`}
                      >
                        PKR
                      </span>
                    </p>
                  </div>

                  {/* Down Payment */}
                  <div className="flex items-center justify-between py-3 border-t border-dashed border-[#C9A96E]/30">
                    <p
                      className={`text-xs ${p.popular ? "text-white/50" : "text-[#999]"}`}
                    >
                      Down Payment
                    </p>
                    <p
                      className={`text-sm font-semibold ${p.popular ? "text-[#C9A96E]" : "text-[#0D3D2A]"}`}
                    >
                      PKR {p.downPayment}
                    </p>
                  </div>

                  {/* Balloting */}
                  <div className="flex items-center justify-between pb-2 border-b border-dashed border-[#C9A96E]/30">
                    <p
                      className={`text-xs ${p.popular ? "text-white/50" : "text-[#999]"}`}
                    >
                      Balloting Amount
                    </p>
                    <p
                      className={`text-sm font-semibold ${p.popular ? "text-[#C9A96E]" : "text-[#0D3D2A]"}`}
                    >
                      PKR {p.balloting}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                {/* <div className="px-6 pb-6 pt-2">
                  <a
                    href={`https://wa.me/92${plan.whatsapp.replace(/^0/, "")}?text=I'm interested in ${p.size} plot at ${plan.projectName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                      p.popular
                        ? "bg-[#C9A96E] hover:bg-[#DFC08A] text-[#082718]"
                        : "bg-[#0D3D2A] hover:bg-[#082718] text-white"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enquire Now
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Table View ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                Full Breakdown
              </span>
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#0D3D2A]">
              Complete{" "}
              <span className="italic text-[#C9A96E]">Price Table</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-sm border border-[#E5E0D8] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0D3D2A]">
                  {[
                    "Plot Size",
                    "Total Price (PKR)",
                    "Down Payment",
                    `Monthly (${plan.plans[0].monthlyCount})`,
                    `Half Yearly (${plan.plans[0].halfYearlyCount})`,
                    "Balloting",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-5 py-4 text-left text-[#C9A96E] text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plan.plans.map((p, i) => (
                  <tr
                    key={p.size}
                    className={`border-t border-[#F0EBE3] transition-colors hover:bg-[#F8F5EF] ${
                      p.popular
                        ? "bg-[#F8F5EF]"
                        : i % 2 === 0
                          ? "bg-white"
                          : "bg-[#FDFCFA]"
                    }`}
                  >
                    <td className="px-5 py-4 font-semibold text-[#0D3D2A] whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {p.size}
                        {p.popular && (
                          <span className="bg-[#C9A96E] text-[#082718] text-[8px] font-bold tracking-widest uppercase px-2 py-0.5">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[#333] font-medium">
                      {p.totalPrice}
                    </td>
                    <td className="px-5 py-4 text-[#333]">{p.downPayment}</td>
                    <td className="px-5 py-4 text-[#333] font-semibold text-[#0D3D2A]">
                      {p.monthly}
                    </td>
                    <td className="px-5 py-4 text-[#333]">{p.halfYearly}</td>
                    <td className="px-5 py-4 text-[#333]">{p.balloting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          {plan.note && (
            <p className="mt-4 text-xs text-[#999] italic">{plan.note}</p>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 bg-[#082718] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#C9A96E] text-xs tracking-widest uppercase font-semibold mb-3">
            Get Started Today
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-6">
            Ready to Book Your{" "}
            <span className="italic text-[#C9A96E]">Plot?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/92${plan.whatsapp.replace(/^0/, "")}?text=I want to book a plot at ${plan.projectName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#DFC08A] text-[#082718] px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${plan.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-[#C9A96E]/40 hover:border-[#C9A96E] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
            >
              {/* Call {plan.phone} */}
              Call us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

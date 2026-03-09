import Image from "next/image";
import Link from "next/link";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navBar";

// ── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  { icon: "🏗️", label: "LDA-Approved" },
  { icon: "🔒", label: "Gated Community" },
  { icon: "🤝", label: "50,000+ Families" },
  { icon: "📍", label: "Prime Location" },
  { icon: "🏆", label: "Award-Winning" },
  { icon: "⚡", label: "Underground Utilities" },
];

const pillars = [
  {
    number: "01",
    title: "Prime Location",
    icon: "📍",
    items: [
      "Situated on Main Sharaqpur Road, close to Lahore–Abdul Hakeem Motorway (M-3)",
      "Just 8–10 minutes drive from Lahore District Court & Thokar Niaz Baig",
      "Opposite Faizpur Interchange — seamlessly connected to Lahore–Sialkot Motorway & GT Road",
    ],
  },
  {
    number: "02",
    title: "Security & Safety",
    icon: "🔒",
    items: [
      "Gated community with complete perimeter boundary wall and secure entry points",
      "24/7 CCTV surveillance with continuous monitoring throughout the society",
      "Trained security personnel on round-the-clock professional patrols",
      "Quick response team for immediate emergency assistance",
    ],
  },
  {
    number: "03",
    title: "World-Class Amenities",
    icon: "🏙️",
    items: [
      "Wide main boulevards up to 210 feet with premium carpeted roads",
      "Completely underground electrical wiring for uninterrupted aesthetics",
      "Beautifully landscaped parks and jogging tracks in every block",
      "Grand Mosque — a contemporary architectural masterpiece",
      "Top-tier educational institutions and healthcare facilities within the society",
    ],
  },
];

const services = [
  {
    icon: "🏠",
    title: "Buying & Selling",
    desc: "Facilitating residential and commercial plot transactions with full transparency and expert guidance.",
  },
  {
    icon: "📄",
    title: "File Trading",
    desc: "Transparent file trading with competitive rates and verified documentation at every step.",
  },
  {
    icon: "📈",
    title: "Investment Consultancy",
    desc: "Strategic guidance on maximizing returns on investment tailored to your financial goals.",
  },
  {
    icon: "✅",
    title: "Authentic Documentation",
    desc: "Comprehensive assistance with paperwork verification and all legal formalities handled professionally.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
];

// ── Page ────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "About Us — The Capital Property",
  description:
    "Learn about Al Jalil Garden Lahore — a modern, secure housing society on Main Sharaqpur Road offering luxury living and premium real estate investment opportunities.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Dark overlay - simplified since image is already dark */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85"
            alt="Al Jalil Garden"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Lighter overlay now since image is darker */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3D2A]/70 via-[#0D3D2A]/50 to-transparent" />
        </div>

        {/* Decorative left line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent opacity-60 z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-medium">
              Who We Are
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-white font-light leading-tight">
            Al Jalil Garden Lahore <br />
            <span className="italic text-[#C9A96E]">
              Your Gateway to Luxury Living
            </span>
          </h1>
        </div>
      </section>
      {/* ── Intro + Highlights ── */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#0D3D2A] leading-tight mb-4">
                Building Legacies,{" "}
                <span className="italic text-[#C9A96E]">One Property</span> at a
                Time
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#A8843E] to-[#DFC08A] mb-6" />
              <p className="text-[#555] leading-relaxed mb-4 font-light">
                Al Jalil Garden Lahore is a modern, serene, and secure housing
                society offering an exceptional opportunity to reside in the
                heart of Lahore. Whether you&apos;re looking to build your dream
                home or make a smart real estate investment, Al Jalil Garden
                presents the ideal choice.
              </p>
              <p className="text-[#555] leading-relaxed mb-6 font-light">
                With a steadfast commitment to quality, innovation, and customer
                trust, we don&apos;t just build properties — we create thriving
                communities where families build their futures. Our developments
                are backed by LDA approvals and built to the highest standards.
              </p>

              {/* Highlight pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 bg-white border border-[#E5E0D8] px-3 py-2.5 text-xs text-[#444] shadow-sm"
                  >
                    <span className="text-base leading-none">{h.icon}</span>
                    <span className="font-medium leading-tight">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-sm ${i % 2 === 1 ? "mt-8" : ""}`}
                  style={{ height: i < 2 ? "200px" : "160px" }}
                >
                  <Image
                    src={src}
                    alt="Al Jalil Garden"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0D3D2A] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "15+", label: "Years of Excellence" },
            { value: "50K+", label: "Happy Families" },
            { value: "9+", label: "Flagship Projects" },
            { value: "500+", label: "Acres Developed" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i < 3 ? "md:border-r border-[#C9A96E]/20" : ""}`}
            >
              <p className="font-display text-4xl font-semibold text-[#C9A96E] mb-1">
                {stat.value}
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                What We Offer
              </span>
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#0D3D2A]">
              Why Choose{" "}
              <span className="italic text-[#C9A96E]">Al Jalil Garden</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group border border-[#E5E0D8] bg-[#F8F5EF] p-8 hover:border-[#C9A96E] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute -top-4 -right-2 font-display text-8xl font-bold text-[#0D3D2A]/5 select-none pointer-events-none">
                  {pillar.number}
                </span>

                <div className="text-3xl mb-4">{pillar.icon}</div>
                <div className="h-0.5 w-10 bg-[#C9A96E] mb-4" />
                <h3 className="font-display text-xl font-semibold text-[#0D3D2A] mb-5 group-hover:text-[#C9A96E] transition-colors">
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#555] leading-relaxed"
                    >
                      <svg
                        className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="py-16 md:py-24 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                What We Do
              </span>
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-light text-[#0D3D2A]">
              Our <span className="italic text-[#C9A96E]">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white border border-[#E5E0D8] p-6 md:p-7 hover:border-[#C9A96E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* SVG icon in brand green */}
                <div className="text-[#0D3D2A] group-hover:text-[#C9A96E] transition-colors mb-5">
                  {s.svg}
                </div>
                <div className="h-0.5 w-8 bg-[#C9A96E] mb-4" />
                <h3 className="font-display text-base md:text-lg font-semibold text-[#0D3D2A] mb-3 group-hover:text-[#C9A96E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery Strip ── */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
              Gallery
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-40 overflow-hidden rounded-sm group"
              >
                <Image
                  src={src}
                  alt={`Al Jalil Garden ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-[#0D3D2A]/0 group-hover:bg-[#0D3D2A]/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

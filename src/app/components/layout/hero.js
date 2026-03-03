"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90"
          alt="Luxury Property"
          fill
          priority
          className="object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D3D2A]/90 via-[#0D3D2A]/70 to-[#082718]/50" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* gold lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent opacity-60 z-10" />
      <div className="absolute top-16 left-8 w-24 h-px bg-[#C9A96E]/40 z-10 hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-medium">
              Invest in Prestige
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.08] mb-6">
            Discover Your <br />
            <span className="italic text-[#C9A96E]">Dream</span>{" "}
            <span className="font-semibold">Property</span>
          </h1>

          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-xl">
            The Capital Property — Pakistan&apos;s most trusted name in premium
            real estate. From residential plots to luxury villas, we build
            legacies.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
        \
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A96E]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

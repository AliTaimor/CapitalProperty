import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "../../lib/projects";
import Navbar from "@/app/components/layout/navBar";

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.metaTitle || `${project.name} — The Capital Property`,
    description:
      project.metaDescription || project.tagline || project.description[0],
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#082718] via-[#082718]/50 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A96E] to-transparent opacity-60 z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light leading-tight mb-3">
            <span className=" text-[#C9A96E]">{project.shortName}</span>
          </h1>

          {/* Location */}
  
          <div className="flex items-center gap-2 text-white text-sm mt-2">
            <svg
              className="w-4 h-4 text-[#C9A96E]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white font-medium">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0D3D2A] py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {project.stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-[#C9A96E] mb-1">
                  {stat.value}
                </p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Highlights */}
      <section className="py-16 md:py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                  Overview
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#0D3D2A] mb-4">
                About{" "}
                <span className="italic text-[#C9A96E]">
                  {project.shortName}
                </span>
              </h2>
              <div className="space-y-4">
                {project.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[#555] leading-relaxed text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                  Key Features
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {project.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-white p-3 border border-[#E5E0D8] hover:border-[#C9A96E] transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs md:text-sm text-[#444]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Sizes  */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                Available Sizes
              </span>
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[#0D3D2A]">
              Plot <span className="italic text-[#C9A96E]">Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {project.plotSizes.map((plot, index) => (
              <div
                key={plot.size}
                className={`relative pt-8 pb-6 px-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 ${
                  index === 1
                    ? "border-[#C9A96E] bg-[#0D3D2A]"
                    : "border-[#E5E0D8] bg-[#F8F5EF] hover:border-[#C9A96E]"
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-[#082718] text-[9px] font-bold tracking-widest uppercase px-3 py-1 whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                {/* Icon */}
                <div
                  className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${index === 1 ? "bg-[#C9A96E]/20" : "bg-[#0D3D2A]/10"}`}
                >
                  <svg
                    className={`w-6 h-6 ${index === 1 ? "text-[#C9A96E]" : "text-[#0D3D2A]"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
                <p
                  className={`font-display text-3xl font-semibold mb-2 ${index === 1 ? "text-[#C9A96E]" : "text-[#0D3D2A]"}`}
                >
                  {plot.size}
                </p>
                <div
                  className={`w-8 h-0.5 mx-auto mb-3 ${index === 1 ? "bg-[#C9A96E]/50" : "bg-[#C9A96E]"}`}
                />
                <p
                  className={`text-xs leading-relaxed ${index === 1 ? "text-white/70" : "text-[#666]"}`}
                >
                  {plot.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities - FIXED: compact rows with icon + text, no giant checkmark */}
      <section className="py-16 md:py-20 bg-[#0D3D2A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                Facilities
              </span>
              <div className="h-px w-10 bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">
              World-Class{" "}
              <span className="italic text-[#C9A96E]">Amenities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 hover:border-[#C9A96E]/60 hover:bg-white/10 transition-all duration-200"
              >
                {/* Small gold checkmark circle */}
                <div className="w-7 h-7 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-[#C9A96E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white/85 text-sm leading-snug">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - FIXED: uniform grid, images contained properly, scales with more images */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
              Gallery
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-52 md:h-64 overflow-hidden group rounded-sm"
              >
                <Image
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-[#082718]/0 group-hover:bg-[#082718]/30 transition-all duration-300" />
                {/* Image number badge */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {index + 1} / {project.gallery.length}
                </div>
              </div>
            ))}
          </div>

          {/* Show count if many images */}
          {project.gallery.length > 6 && (
            <p className="text-center text-[#999] text-xs mt-4 tracking-wider">
              Showing all {project.gallery.length} photos
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#082718]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C9A96E] text-xs tracking-widest uppercase font-semibold mb-3">
            Ready to Invest?
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-6">
            Secure Your Plot in{" "}
            <span className="italic text-[#C9A96E]">{project.shortName}</span>{" "}
            Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={project.paymentPlanHref}
              className="bg-[#C9A96E] hover:bg-[#DFC08A] text-[#082718] px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors"
            >
              View Payment Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer placeholder */}
      <footer className="bg-[#0D3D2A] text-white/50 py-8 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6">
          © 2024 The Capital Property. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

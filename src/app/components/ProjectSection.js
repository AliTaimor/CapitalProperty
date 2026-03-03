import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Prestige Heights",
    location: "Lahore",
    type: "Residential Society",
    tag: "LDA Approved",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    href: "/projects/prestige-heights",
  },
  {
    id: 2,
    name: "Capital Gardens",
    location: "Lahore West",
    type: "Housing Scheme",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80",
    href: "/projects/capital-gardens",
  },
  {
    id: 3,
    name: "Crown Residencia",
    location: "Sheikhupura",
    type: "Luxury Residencia",
    tag: "New Launch",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    href: "/projects/crown-residencia",
  },
  {
    id: 4,
    name: "Elite Enclave",
    location: "Lahore",
    type: "Commercial Hub",
    tag: "Selling Fast",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    href: "/projects/elite-enclave",
  },
  {
    id: 5,
    name: "Royal Villas",
    location: "DHA Lahore",
    type: "Premium Villas",
    tag: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80",
    href: "/projects/royal-villas",
  },
  {
    id: 6,
    name: "Capital Entertainment City",
    location: "Lahore Ring Road",
    type: "Entertainment & Retail",
    tag: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
    href: "/projects/entertainment-city",
  },
];

const tagColors = {
  "LDA Approved": "bg-[#0D3D2A] text-[#C9A96E]",
  Featured: "bg-[#C9A96E] text-[#082718]",
  "New Launch": "bg-emerald-700 text-white",
  "Selling Fast": "bg-red-700 text-white",
  Exclusive: "bg-[#082718] text-[#C9A96E]",
  Upcoming: "bg-[#555] text-white",
};

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
              Our Portfolio
            </span>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#0D3D2A] mb-4">
            Our <span className="italic text-[#C9A96E]">Flagship</span> Projects
          </h2>
          <p className="text-[#777] max-w-xl mx-auto text-sm leading-relaxed">
            Explore our prestigious developments — each one a testament to
            quality craftsmanship and visionary planning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative overflow-hidden block bg-[#0D3D2A] rounded-sm shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082718]/90 via-[#0D3D2A]/30 to-transparent" />

                {/* Tag */}
                <span
                  className={`absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1 font-bold ${tagColors[project.tag] || "bg-[#C9A96E] text-[#082718]"}`}
                >
                  {project.tag}
                </span>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#C9A96E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-4 h-4 text-[#082718]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-[#C9A96E]/60 text-[10px] uppercase tracking-widest mb-1">
                  {project.type}
                </p>
                <h3 className="text-white font-display text-xl font-medium mb-1 group-hover:text-[#C9A96E] transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1.5 text-white/50 text-xs">
                  <svg
                    className="w-3 h-3 text-[#C9A96E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </div>
              </div>

              {/* Bottom border accent */}
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 border-2 border-[#0D3D2A] text-[#0D3D2A] px-10 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-[#0D3D2A] hover:text-[#C9A96E] transition-all duration-300"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

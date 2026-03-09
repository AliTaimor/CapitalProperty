export default function LocationSection() {
  const LAT = "31.597764";
  const LNG = "74.213848";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}&travelmode=driving`;

  const embedUrl = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;

  return (
    <section className="py-20 md:py-28 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
              Find Us
            </span>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#0D3D2A]">
            Our <span className="italic text-[#C9A96E]">Location</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "🏢",
                title: "Head Office",
                lines: [
                  "Al Jalil Garden, Opposite Faizpur Interchange,",
                  "Sharaqpur Road, Lahore, Punjab, Pakistan",
                ],
              },
              {
                icon: "📞",
                title: "Phone",
                lines: ["+92-3057338294"],
              },
              {
                icon: "✉️",
                title: "Email",
                lines: ["thecapitalproperty053@gmail.com"],
              },
              {
                icon: "🕐",
                title: "Office Hours",
                lines: [
                  "Mon – Sun: 8:00 AM – 9:00 PM",
                  "Service available 24/7",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-l-4 border-[#C9A96E] px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{card.icon}</span>
                  <div>
                    <p className="text-xs text-[#C9A96E] uppercase tracking-widest font-semibold mb-1">
                      {card.title}
                    </p>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-[#555]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map embed — pinned via exact coordinates */}
          <div className="lg:col-span-2 min-h-[400px] rounded-sm overflow-hidden shadow-lg border border-[#E5E0D8] relative group">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Jalil Garden, Faizpur Interchange, Lahore"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0D3D2A]/0 group-hover:bg-[#0D3D2A]/10 transition-all duration-300 pointer-events-none" />

            {/* Open in Maps button — appears on hover */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#0D3D2A] hover:bg-[#C9A96E] text-[#C9A96E] hover:text-[#082718] px-4 py-2.5 text-xs font-bold tracking-widest uppercase shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

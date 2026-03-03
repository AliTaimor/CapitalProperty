export default function LocationSection() {
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
                  "Main Boulevard, Gulberg III",
                  "Lahore, Punjab, Pakistan",
                ],
              },
              {
                icon: "📞",
                title: "Phone",
                lines: ["+92-300-111-2222", "+92-42-111-333-444"],
              },
              {
                icon: "✉️",
                title: "Email",
                lines: [
                  "info@thecapitalproperty.com",
                  "sales@thecapitalproperty.com",
                ],
              },
              {
                icon: "🕐",
                title: "Office Hours",
                lines: [
                  "Mon – Sat: 9:00 AM – 6:00 PM",
                  "Sunday: 10:00 AM – 3:00 PM",
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

          {/* Map embed */}
          <div className="lg:col-span-2 min-h-[400px] rounded-sm overflow-hidden shadow-lg border border-[#E5E0D8]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54378.484660282585!2d74.27149424614813!3d31.520369942694185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sGulberg%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

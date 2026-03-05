"use client";
import { useState } from "react";
import { Instagram } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", project: "", message: "" });
  };

  return (
    <section className="py-20 md:py-28 bg-[#0D3D2A] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 60px)",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A96E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A96E]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
              Write Us <br />
              <span className="italic text-[#C9A96E]">Your Query</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#A8843E] to-[#DFC08A] mb-6" />
            <p className="text-white/50 leading-relaxed mb-8 font-light">
              Swing by for a cup of coffee, or leave us a message. Our team is
              here to help you find the perfect property investment.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[{ icon: Instagram, name: "Instagram", href: "#" }].map(
                (social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      title={social.name}
                      className="w-9 h-9 border border-[#C9A96E]/25 flex items-center justify-center text-[#C9A96E]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  );
                },
              )}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#C9A96E]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg font-display">Message Sent!</p>
                <p className="text-white/50 text-sm mt-2">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      name: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "+92 300 0000000",
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[10px] text-[#C9A96E] uppercase tracking-widest mb-1.5 font-semibold">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name]}
                        onChange={(e) =>
                          setForm({ ...form, [field.name]: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm outline-none focus:border-[#C9A96E] transition-colors"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] text-[#C9A96E] uppercase tracking-widest mb-1.5 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm outline-none focus:border-[#C9A96E] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-[#C9A96E] uppercase tracking-widest mb-1.5 font-semibold">
                    Interested In
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) =>
                      setForm({ ...form, project: e.target.value })
                    }
                    className="w-full bg-[#0D3D2A] border border-white/10 text-white/70 px-4 py-3 text-sm outline-none focus:border-[#C9A96E] transition-colors cursor-pointer"
                  >
                    <option value="">Select a Project</option>
                    <option>Prestige Heights</option>
                    <option>Capital Gardens</option>
                    <option>Crown Residencia</option>
                    <option>Elite Enclave</option>
                    <option>Royal Villas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-[#C9A96E] uppercase tracking-widest mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm outline-none focus:border-[#C9A96E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A96E] hover:bg-[#DFC08A] text-[#082718] py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

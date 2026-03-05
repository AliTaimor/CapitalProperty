"use client";
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form after modal closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", project: "", message: "" });
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0D3D2A] shadow-2xl border border-[#C9A96E]/20 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#C9A96E 0px,#C9A96E 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#C9A96E 0px,#C9A96E 1px,transparent 1px,transparent 60px)",
            }}
          />
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Gold top border */}
          <div className="h-1 w-full bg-gradient-to-r from-[#A8843E] via-[#DFC08A] to-[#A8843E]" />

          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-7">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Get In Touch
                  </span>
                </div>
                <h2 className="font-display text-3xl font-light text-white">
                  Write Us{" "}
                  <span className="italic text-[#C9A96E]">Your Query</span>
                </h2>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="cursor-pointer w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-200 shrink-0 ml-4"
                aria-label="Close modal"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Success state */}
            {sent ? (
              <div className="text-center py-14">
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
                <p className="text-white text-xl font-display mb-2">
                  Message Sent!
                </p>
                <p className="text-white/50 text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Phone row */}
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

                {/* Email */}
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

                {/* Project */}
                <div>
                  <label className="block text-[10px] text-[#C9A96E] uppercase tracking-widest mb-1.5 font-semibold">
                    Interested In
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) =>
                      setForm({ ...form, project: e.target.value })
                    }
                    className="w-full bg-[#082718] border border-white/10 text-white/70 px-4 py-3 text-sm outline-none focus:border-[#C9A96E] transition-colors cursor-pointer"
                  >
                    <option value="">Select a Project</option>
                    <option>AlJalil Gardens</option>
                    <option>Lahore Future City Plan</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] text-[#C9A96E] uppercase tracking-widest mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm outline-none focus:border-[#C9A96E] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-[#C9A96E] hover:bg-[#DFC08A] text-[#082718] py-3.5 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                >
                  Send Message
                </button>

                {/* Social row */}
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-white/30 text-xs">Follow us:</span>
                  <a
                    href="#"
                    title="Instagram"
                    className="w-8 h-8 border border-[#C9A96E]/25 flex items-center justify-center text-[#C9A96E]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all duration-200"
                  >
                    <Instagram size={14} />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#082718] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-24 h-24 mb-5">
              <Image
                src="/images/Logo.png"
                alt="The Capital Property"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 font-light">
              Pakistan&apos;s most trusted name in premium real estate. Building
              legacies, one property at a time.
            </p>
            <div className="text-sm text-white/60 space-y-2">
              <p className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Head Office: AlJalil Garden, Faizpur Interchange, Main Sharaqpur
                Road Lahore
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#C9A96E] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +92-3057338294
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#C9A96E] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                thecapitalproperty053@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-bold mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-[#C9A96E]" /> Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/AboutUsPage" },
                { label: "Our Projects", href: "/projects" },
                { label: "Payment Plans", href: "/payment" },
                { label: "Development Update", href: "/development" },
                { label: "Gallery", href: "/gallery" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#C9A96E] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A96E] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-bold mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-[#C9A96E]" /> Our Projects
            </h4>
            <ul className="space-y-2.5">
              {["AlJalil Gardens", "Lahore Future City Plan"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-white/50 hover:text-[#C9A96E] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#C9A96E] transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Links + Social */}
          <div>
            <h4 className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-bold mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-[#C9A96E]" /> Connect With Us
            </h4>
            <ul className="space-y-2.5 mb-7">
              {["Authorized Dealers", "Our Policies", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-[#C9A96E] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A96E] transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-3">
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
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>
            © {new Date().getFullYear()} The Capital Property. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="hover:text-[#C9A96E] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#C9A96E] transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-[#C9A96E] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

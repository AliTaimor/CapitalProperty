"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "../ui/ContactModal";

const navLinks = [
  { label: "About Us", href: "/about" },
  {
    label: "Projects",
    href: "#",
    children: [
      { label: "AlJalil Gardens", href: "/projects/prestige-heights" },
      { label: "Lahore Future City Plan", href: "/projects/capital-gardens" },
    ],
  },
  {
    label: "Payment Plan",
    href: "#",
    children: [
      { label: "Prestige Heights", href: "/payment/prestige-heights" },
      { label: "Capital Gardens", href: "/payment/capital-gardens" },
      ,
    ],
  },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Development Update", href: "/development" },
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/careers" },
      { label: "Office Locations", href: "/contact" },
    ],
  },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#082718] text-[#C9A96E] text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +92-300-111-2222
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@thecapitalproperty.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            {["instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="hover:text-[#DFC08A] transition-colors capitalize text-[10px] tracking-wider"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0D3D2A]/98 backdrop-blur-md shadow-lg py-2" : "bg-[#0D3D2A] py-3"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold shadow-md">
              <Image
                src="/images/Logo.png"
                alt="The Capital Property"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative nav-item group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/90 hover:text-[#C9A96E] transition-colors duration-200 tracking-wide font-medium group-hover:text-[#C9A96E]"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {/* Underline */}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-[#082718] border-t-2 border-[#C9A96E] shadow-2xl z-50 py-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-white/80 hover:text-[#C9A96E] hover:bg-[#0D3D2A] hover:pl-7 transition-all duration-200 border-b border-white/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA — opens modal */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="bg-[#C9A96E] hover:bg-[#DFC08A] text-[#082718] text-sm px-5 py-2.5 font-semibold tracking-wider transition-colors duration-300 cursor-pointer"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#082718] border-t border-[#C9A96E]/20 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() =>
                    setOpenMobileSub(
                      openMobileSub === link.label ? null : link.label,
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-3.5 text-white/90 hover:text-[#C9A96E] text-sm font-medium border-b border-white/5"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className={`w-4 h-4 transition-transform ${openMobileSub === link.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {link.children && openMobileSub === link.label && (
                  <div className="bg-[#0D3D2A]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-10 py-3 text-sm text-white/70 hover:text-[#C9A96E] border-b border-white/5"
                      >
                        — {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
                className="block w-full text-center bg-[#C9A96E] text-[#082718] py-3 font-semibold text-sm tracking-wider"
              >
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}

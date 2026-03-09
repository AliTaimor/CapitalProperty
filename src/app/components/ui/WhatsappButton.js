"use client";
import { useState } from "react";

// const WHATSAPP_NUMBER = "923057338294";
const WHATSAPP_NUMBER = "923343771122";

const WHATSAPP_MESSAGE =
  "Hello! I'm interested in learning more about your projects.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0);    }
          25%       { transform: translateY(-10px); }
          50%       { transform: translateY(-5px);  }
          75%       { transform: translateY(-10px); }
        }
        @keyframes wa-ping {
          0%   { transform: scale(1);    opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0;   }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0);   }
        }
        .wa-bounce {
          animation: wa-bounce 2.4s ease-in-out infinite;
        }
        .wa-bounce:hover {
          animation: none;
        }
        .wa-ping {
          animation: wa-ping 1.8s ease-out infinite;
        }
        .wa-tooltip {
          animation: wa-tooltip-in 0.2s ease forwards;
        }
      `}</style>

      <div className="fixed bottom-6 right-5 z-[999] flex items-center justify-end gap-3 select-none">
        {/* Tooltip */}
        {hovered && (
          <div className="wa-tooltip bg-[#0D3D2A] text-white text-xs font-medium px-3.5 py-2 shadow-lg border border-[#C9A96E]/30 whitespace-nowrap pointer-events-none">
            <span className="text-[#C9A96E]">Chat with us</span>
            <span className="block text-white/50 text-[10px] mt-0.5 leading-none">
              on WhatsApp
            </span>
            {/* Arrow */}
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[5px] border-transparent border-l-[#0D3D2A]" />
          </div>
        )}

        <div className="relative wa-bounce">
          <span className="wa-ping absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none" />

          {/* Main button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-200 active:scale-90"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              boxShadow:
                "0 4px 24px 0 rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            {/* WhatsApp icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7"
              fill="white"
              aria-hidden="true"
            >
              <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.635 4.64 1.84 6.651L2.667 29.333l6.864-1.8A13.267 13.267 0 0016.003 29.333C23.367 29.333 29.333 23.363 29.333 16S23.367 2.667 16.003 2.667zm0 24.267a10.942 10.942 0 01-5.572-1.527l-.4-.237-4.072 1.067 1.088-3.965-.261-.408A10.932 10.932 0 015.067 16c0-6.032 4.907-10.933 10.936-10.933S26.933 9.968 26.933 16 22.032 26.934 16.003 26.934zm6-8.195c-.328-.163-1.944-.957-2.245-1.067-.3-.107-.52-.163-.739.164-.217.328-.844 1.067-1.036 1.287-.19.217-.38.243-.708.08-.328-.163-1.388-.511-2.644-1.632-.976-.872-1.636-1.949-1.828-2.276-.19-.328-.02-.505.144-.668.148-.147.328-.383.491-.575.163-.19.217-.328.327-.545.108-.217.055-.407-.027-.571-.08-.163-.74-1.78-1.013-2.437-.267-.64-.54-.553-.74-.563-.19-.008-.41-.01-.628-.01-.217 0-.571.08-.87.407-.298.328-1.14 1.115-1.14 2.72s1.167 3.155 1.33 3.372c.163.217 2.297 3.51 5.567 4.922.778.336 1.385.537 1.858.687.78.249 1.491.214 2.052.13.626-.094 1.944-.795 2.218-1.563.272-.768.272-1.428.19-1.563-.08-.136-.298-.217-.628-.38z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

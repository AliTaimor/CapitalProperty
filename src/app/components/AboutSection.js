// import Link from "next/link";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section className="py-20 md:py-28 bg-[#F8F5EF]">
//       <div className="max-w-7xl mx-auto px-6 md:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Image collage */}
//           <div className="relative">
//             <div className="grid grid-cols-2 gap-4">
//               <Image
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
//                 alt="Property"
//                 // className="w-full h-64 object-cover rounded-sm"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//               <Image
//                 src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80"
//                 alt="Property"
//                 // className="w-full h-64 object-cover rounded-sm mt-10"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//               <Image
//                 src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
//                 alt="Property"
//                 // className="w-full h-48 object-cover rounded-sm"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//               <Image
//                 src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80"
//                 alt="Property"
//                 // className="w-full h-48 object-cover rounded-sm"
//                 fill
//                 priority
//                 className="object-cover"
//               />
//             </div>
//             {/* Gold badge overlay */}
//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0D3D2A] text-[#C9A96E] px-8 py-4 text-center shadow-xl whitespace-nowrap">
//               <p className="font-display text-3xl font-semibold">15+</p>
//               <p className="text-xs tracking-widest uppercase text-[#C9A96E]/70 mt-0.5">
//                 Years of Excellence
//               </p>
//             </div>
//           </div>

//           {/* Text */}
//           <div className="lg:pt-6">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="h-px w-10 bg-[#C9A96E]" />
//               <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
//                 About Us
//               </span>
//             </div>
//             <h2 className="font-display text-4xl md:text-5xl font-light text-[#0D3D2A] leading-tight mb-6">
//               Building Legacies,
//               <br />
//               <span className="italic text-[#C9A96E]">One Property</span> at a
//               Time
//             </h2>
//             <div className="w-16 h-0.5 bg-gradient-to-r from-[#A8843E] to-[#DFC08A] mb-6" />
//             <p className="text-[#555] leading-relaxed mb-4 font-light">
//               The Capital Property is a leading name in Pakistan&apos;s premium
//               real estate sector. Our portfolio spans residential societies,
//               luxury villas, commercial developments, and entertainment
//               destinations across Lahore and beyond.
//             </p>
//             <p className="text-[#555] leading-relaxed mb-8 font-light">
//               With a steadfast commitment to quality, innovation, and customer
//               trust, we don&apos;t just build properties — we create thriving
//               communities where families build their futures. Our developments
//               are backed by LDA approvals and built to the highest standards.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {[
//                 { icon: "🏗️", text: "LDA-Approved Projects" },
//                 { icon: "🏆", text: "Award-Winning Designs" },
//                 { icon: "🤝", text: "Trusted by 50,000+ Families" },
//                 { icon: "📍", text: "Prime Lahore Locations" },
//               ].map((item) => (
//                 <div
//                   key={item.text}
//                   className="flex items-center gap-3 text-sm text-[#444]"
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span>{item.text}</span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               href="/about"
//               className="inline-flex items-center gap-3 bg-[#0D3D2A] text-[#C9A96E] px-7 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#082718] transition-all duration-300"
//             >
//               Read More
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
                  h: "h-64",
                },
                {
                  src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
                  h: "h-64 mt-10",
                },
                {
                  src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
                  h: "h-48",
                },
                {
                  src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
                  h: "h-48",
                },
              ].map((img, i) => (
                <div
                  key={i}
                  className={`relative w-full ${img.h} overflow-hidden rounded-sm`}
                >
                  <Image
                    src={img.src}
                    alt="Al Jalil Garden Property"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            {/* Gold badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0D3D2A] text-[#C9A96E] px-8 py-4 text-center shadow-xl whitespace-nowrap z-10">
              <p className="font-display text-3xl font-semibold">15+</p>
              <p className="text-xs tracking-widest uppercase text-[#C9A96E]/70 mt-0.5">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Text — abbreviated for homepage */}
          <div className="lg:pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase font-semibold">
                About Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#0D3D2A] leading-tight mb-6">
              Your Gateway to
              <br />
              <span className="italic text-[#C9A96E]">Luxury Living</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#A8843E] to-[#DFC08A] mb-6" />

            <p className="text-[#555] leading-relaxed mb-4 font-light">
              Al Jalil Garden Lahore is a modern, serene, and secure housing
              society offering an exceptional opportunity to reside in the heart
              of Lahore. Whether you&apos;re looking to build your dream home or
              invest in real estate, Al Jalil Garden presents the ideal choice.
            </p>
            <p className="text-[#555] leading-relaxed mb-8 font-light">
              Strategically located on Main Sharaqpur Road — opposite Faizpur
              Interchange — with seamless access to major motorways, top-tier
              amenities, and LDA-backed developments.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🏗️", text: "LDA-Approved Projects" },
                { icon: "🔒", text: "24/7 Gated Security" },
                { icon: "🤝", text: "Trusted by 50,000+ Families" },
                { icon: "📍", text: "Prime Lahore Location" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm text-[#444]"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/AboutUsPage"
              className="inline-flex items-center gap-3 bg-[#0D3D2A] text-[#C9A96E] px-7 py-3.5 text-sm font-semibold tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#082718] transition-all duration-300"
            >
              Read More
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
      </div>
    </section>
  );
}

// import Hero from "@/app/components/layout/hero";
// import Navbar from "@/app/components/layout/navBar";
// import PropertyCard from "@/app/components/ui/PropertyCard";
// import { properties } from "@/app/data/properties";

import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/layout/footer";
import Hero from "./components/layout/hero";
import Navbar from "./components/layout/navBar";
import LocationSection from "./components/LocationSection";
import ProjectsSection from "./components/ProjectSection";
import StatsSection from "./components/ui/StatSection";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-neutral-light">
//       <Navbar />
//       <Hero />

//       {/* Featured Properties Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="mb-14 text-center">
//             <h2 className="text-3xl md:text-4xl font-light text-neutral-text mb-4">
//               Featured{" "}
//               <span className="text-brand-gold italic">Properties</span>
//             </h2>
//             <div className="w-16 h-[2px] bg-brand-gold mx-auto" />
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {properties.slice(0, 6).map((property) => (
//               <PropertyCard key={property.id} {...property} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <LocationSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

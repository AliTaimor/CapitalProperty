import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/layout/footer";
import Hero from "./components/layout/hero";
import Navbar from "./components/layout/navBar";
import LocationSection from "./components/LocationSection";
import ProjectsSection from "./components/ProjectSection";
import StatsSection from "./components/ui/StatSection";

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

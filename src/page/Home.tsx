import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import HeroSection from "../component/HeroSection";
import NewsSection from "../component/NewsSection";
import SponsorsSection from "../component/SponsorsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2F1947] to-[#735D78] text-white">
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
};
export default Home;

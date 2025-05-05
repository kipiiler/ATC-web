import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import HeroSection from "../component/HeroSection";
import NewsSection from "../component/NewsSection";
import SponsorshipSection from "../component/SponsorshipSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <SponsorshipSection />
      <ContactSection />
    </div>
  );
};

export default Home;
import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import HeroSection from "../component/HeroSection";
import NewsSection from "../component/NewsSection";
import SponsorsSection from "../component/SponsorsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
};
export default Home;

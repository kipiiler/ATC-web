import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import HeroSection from "../component/HeroSection";
import NewsSection from "../component/NewsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
export default Home;

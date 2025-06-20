import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import FeatureSection from "./components/Feature";
import CTASecton from "./components/CTA";
import FooterSelection from "./components/Footer";
import TestimonialMapSelection from "./components/TestimonialMap";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CTASecton />
      <TestimonialMapSelection />
      <FooterSelection />
    </div>
  );
};

export default Home;

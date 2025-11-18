import "./globals.css";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import PortfolioSection from "./components/sections/portfolioSection/PortfolioSection";
import AboutSection from "./components/sections/AboutSection/AboutSection";

export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
    </>
  );
}

import MainLayout from './layouts/MainLayout';
import Hero from './assets/components/hero';
import InnovativeExcellence from './assets/components/innovativeExcellence';
import SuccessStories from './assets/components/successstories';
import EndPage from "./assets/components/endpage";
import IndustrySolutions from "./assets/components/industrysolutions";
import ServicesSection from "./assets/components/services/index"; // Updated path with explicit index file
import CareerSection from "./assets/components/career"; // <-- Add this import
import HeroDetails from "./assets/components/hero/HeroDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Hero />
          <InnovativeExcellence />
          <SuccessStories />
          <ServicesSection />
          <IndustrySolutions />
          <CareerSection /> {/* <-- Add this line */}
          <EndPage />
        </MainLayout>
      } />
      <Route path="/hero-details/:slug" element={<HeroDetails />} />
    </Routes>
  );
}

export default App;

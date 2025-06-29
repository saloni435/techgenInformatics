import MainLayout from './layouts/MainLayout';
import Hero from './assets/components/hero';
import InnovativeExcellence from './assets/components/innovativeExcellence';
import SuccessStories from './assets/components/successstories';
import EndPage from "./assets/components/endpage";
import IndustrySolutions from "./assets/components/industrysolutions";
import ServicesSection from "./assets/components/services/index"; // Updated path with explicit index file
import CareerSection from "./assets/components/career"; // <-- Add this import

function App() {
  return (
    <MainLayout>
      <Hero />
      <InnovativeExcellence />
      <SuccessStories />
      <ServicesSection />
      <IndustrySolutions />
      <CareerSection /> {/* <-- Add this line */}
      <EndPage />
    </MainLayout>
  );
}

export default App;

import MainLayout from './layouts/MainLayout';
import Hero from './assets/components/hero';
import SuccessStories from './assets/components/successstories';
import EndPage from "./assets/components/endpage";
import ContactUsBar from "./assets/components/contact-us";
import IndustrySolutions from "./assets/components/industrysolutions";
import ServicesSection from "./assets/components/services/index"; // Updated path with explicit index file

function App() {
  return (
    <MainLayout>
      <Hero />
      <SuccessStories />
      <ServicesSection />
      <IndustrySolutions />
      <EndPage />
      <ContactUsBar />
    </MainLayout>
  );
}

export default App;

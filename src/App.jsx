import MainLayout from './layouts/MainLayout';
import Hero from './assets/components/hero';
import InnovativeExcellence from './assets/components/innovativeExcellence';
import ServicesSection from "./assets/components/services/index";
import KeyTechnologies from "./assets/components/keytechnologies";
import IndustriesSection from "./assets/components/industries";
import Partners from "./assets/components/partners";
import EndPage from "./assets/components/endpage";
import HeroDetails from "./assets/components/hero/HeroDetails";
import { Routes, Route } from "react-router-dom";

// Import new pages
import AboutPage from './assets/components/pages/AboutPage';
import ServicesPage from './assets/components/pages/ServicesPage';
import IndustriesPage from './assets/components/pages/IndustriesPage';
import CareerPage from './assets/components/pages/CareerPage';
import ContactPage from './assets/components/pages/ContactPage';
import FeedbackPage from './assets/components/pages/FeedbackPage';
import CookiePolicyPage from './assets/components/pages/CookiePolicyPage';
import PrivacyPolicyPage from './assets/components/pages/PrivacyPolicyPage';
import DisclaimerPage from './assets/components/pages/DisclaimerPage';
import SitemapPage from './assets/components/pages/SitemapPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Hero />
          <InnovativeExcellence />
          <ServicesSection />
          <KeyTechnologies />
          <IndustriesSection />
          <Partners />
          <EndPage />
        </MainLayout>
      } />
      <Route path="/hero-details/:slug" element={<HeroDetails />} />

      {/* Add routes for new pages */}
      <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/industries" element={<MainLayout><IndustriesPage /></MainLayout>} />
      <Route path="/career" element={<MainLayout><CareerPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path="/feedback" element={<MainLayout><FeedbackPage /></MainLayout>} />
      <Route path="/cookie-policy" element={<MainLayout><CookiePolicyPage /></MainLayout>} />
      <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicyPage /></MainLayout>} />
      <Route path="/disclaimer" element={<MainLayout><DisclaimerPage /></MainLayout>} />
      <Route path="/sitemap" element={<MainLayout><SitemapPage /></MainLayout>} />
    </Routes>
  );
}

export default App;
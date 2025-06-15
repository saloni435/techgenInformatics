import MainLayout from './layouts/MainLayout';
import Hero from './assets/components/hero';
import InnovativeExcellence from './assets/components/innovativeExcellence';
import SuccessStories from './assets/components/successstories';
import EndPage from "./assets/components/endpage";
import ContactUsBar from "./assets/components/contact-us";
import IndustrySolutions from "./assets/components/industrysolutions";

function App() {
  return (
    <MainLayout>
      <Hero />
      <InnovativeExcellence />
      <SuccessStories />
      <IndustrySolutions />
      <EndPage />
      <ContactUsBar />
    </MainLayout>
  );
}

export default App;

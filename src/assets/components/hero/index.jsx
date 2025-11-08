import React from 'react';
import HeroSlideshow from './HeroSlideshow';
import GlobeCanvas from './Globe';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Button } from '@/components/ui/moving-border';
import { MoveDown } from 'lucide-react';
import './hero.css';

const HeroSection = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const words = [
    { text: "Driving", className: "text-white" },
    { text: "Digital", className: "text-white" },
    { text: "Transformation", className: "text-white" },
    { text: "and", className: "text-white" },
    { text: "Innovation.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="hero-container">
      <HeroSlideshow />
      <div className="hero-overlay"></div>
      
      <h1 className="hero-headline">Intelligent Technology for a Digital Future</h1>
      <TypewriterEffectSmooth words={words} className="text-2xl my-2" />

      <div style={{height: '400px', width: '100%', maxWidth: '600px', margin: '1rem 0', zIndex: 2}}>
        <GlobeCanvas />
      </div>
      
      <Button
        onClick={handleScrollToServices}
        borderRadius="1.75rem"
        className="bg-transparent dark:bg-transparent text-white border border-neutral-700"
        containerClassName="h-20 w-60"
      >
        <span className="mr-2">Discover Our Solutions</span>
        <MoveDown />
      </Button>
    </div>
  );
};

export default HeroSection;
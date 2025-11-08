import React, { useState, useEffect } from 'react';
import './hero.css';

import heromain from '../../images/hero/heromain.png';
import heroimage1 from '../../images/hero/heroimage1.png';
import heroimage2 from '../../images/hero/hero image2.png';
import heroimg3 from '../../images/hero/heroimg3.png';

const images = [heromain, heroimage1, heroimage2, heroimg3];

const HeroSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="hero-slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Hero background"
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
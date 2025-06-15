import React, { useState, useEffect } from "react";
import "./hero.css";

// Import the carousel images that are working correctly
import neuralNetworkImg from "../../images/techgenoffice.png";
import techVisImg from "../../images/innovatesolutions.jpg";
import buildingImg from "../../images/techgen3.png";


const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      background: neuralNetworkImg,
      title: "CSM Tech At 27",
      subtitle: "Building tomorrow's innovations today",
      buttonText: "Learn More",
    },
    {
      background: techVisImg,
      title: "Emerging Technologies",
      subtitle: "Innovations & disruptions to enhance citizen experience.",
      buttonText: "Learn More",
    },
    {
      background: buildingImg,
      title: "Industry Consultants",
      subtitle: "Expert guidance and strategic insights for your business",
      buttonText: "Learn More",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="hero-container">
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "hero-slide active" : "hero-slide"}
              key={index}
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              {index === current && (
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <a href="#" className="hero-learn-more">
                    {slide.buttonText} <span className="arrow-icon">→</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}

        <div className="hero-tabs">
          <div
            className={`hero-tab ${current === 0 ? "active" : ""}`}
            onClick={() => setCurrent(0)}
          >
            CSM Tech At 27
          </div>
          <div
            className={`hero-tab ${current === 1 ? "active" : ""}`}
            onClick={() => setCurrent(1)}
          >
            Emerging Technologies
          </div>
          <div
            className={`hero-tab ${current === 2 ? "active" : ""}`}
            onClick={() => setCurrent(2)}
          >
            Industry Consultants
          </div>
        </div>
      </div>

      <div className="wave-divider-container">
      </div>

      {/* Angular mountain divider - matches the provided image */}
    </>
  );
};

export default Hero;

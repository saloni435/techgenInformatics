import React, { useState, useEffect } from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

// Import the carousel images that are working correctly
import neuralNetworkImg from "../../images/techgenoffice.png";
import techVisImg from "../../images/innovatesolutions.jpg";
import buildingImg from "../../images/career3.png";


const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      background: neuralNetworkImg,
      title: "TechGen Info",
      subtitle: "Building tomorrow's innovations today",
      buttonText: "Learn More",
      slug: "techgen-info"
    },
    {
      background: techVisImg,
      title: "Emerging Technologies",
      subtitle: "Innovations & disruptions to enhance citizen experience.",
      buttonText: "Learn More",
      slug: "emerging-technologies"
    },
    {
      background: buildingImg,
      title: "Industry Consultants",
      subtitle: "Expert guidance and strategic insights for your business",
      buttonText: "Learn More",
      slug: "industry-consultants"
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
                  <button
                    className="hero-learn-more"
                    onClick={() => navigate(`/hero-details/${slide.slug}`)}
                  >
                    {slide.buttonText} <span className="arrow-icon">→</span>
                  </button>
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
          TechGen Info
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

      {/* <div className="wave-divider-container">
      </div> */}

      {/* Angular mountain divider - matches the provided image */}
    </>
  );
};

export default Hero;

import React from "react";
import "./carouselcards.css";

const CarouselCard = ({ title, desc, img, link }) => (
  <div className="carousel-card" style={{ backgroundImage: `url(${img})` }}>
    <div className="carousel-card-content">
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} className="card-link">Explore Case Study</a>
    </div>
  </div>
);

export default CarouselCard;

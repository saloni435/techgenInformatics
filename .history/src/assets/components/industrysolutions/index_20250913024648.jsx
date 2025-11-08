
import React, { useState } from "react";
import "./industrysolutions.css";

const testimonials = [
  {
    image: require("../../images/career1.png"),
    name: "Sarah Chen",
    title: "Product Manager at TechFlow",
    testimonial:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  },
  {
    image: require("../../images/career2.png"),
    name: "John Doe",
    title: "Lead Developer at InnovateX",
    testimonial:
      "A seamless experience from start to finish. The UI is beautiful and the animations are smooth.",
  },
  {
    image: require("../../images/career3.png"),
    name: "Priya Singh",
    title: "CTO at NextGen Solutions",
    testimonial:
      "Our team productivity has increased thanks to the intuitive design and easy navigation.",
  },
];

const TestimonialCard = ({ image, name, title, testimonial }) => (
  <div className="testimonial-card-ui">
    <div className="testimonial-image-ui">
      <img src={image} alt={name} />
    </div>
    <div className="testimonial-content-ui">
      <h3 className="testimonial-name-ui">{name}</h3>
      <p className="testimonial-title-ui">{title}</p>
      <p className="testimonial-text-ui">{testimonial}</p>
    </div>
  </div>
);

const IndustrySolutions = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <div className="testimonial-ui-wrapper">
      <TestimonialCard {...testimonials[current]} />
      <div className="testimonial-arrows-ui">
        <button className="arrow-btn-ui" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <button className="arrow-btn-ui" onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
    </div>
  );
};

export default IndustrySolutions;

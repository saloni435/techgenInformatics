import React from "react";
import "./animated-testimonials.css";

export function AnimatedTestimonials({ testimonials }) {
  return (
    <div className="animated-testimonials-demo">
      <div className="testimonials-scroll">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-img-wrap">
              <img src={t.src} alt={t.name} className="testimonial-img" />
            </div>
            <div className="testimonial-quote">“{t.quote}”</div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-designation">{t.designation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

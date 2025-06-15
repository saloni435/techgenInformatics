import React from "react";
import Carousel from "./carousel";
import "./successstories.css";

const SuccessStories = () => (
  <section className="success-stories-section">
    <div className="success-stories-header">
      <h2>Success Stories</h2>
      <a href="#" className="view-all-link">
        View All <span className="arrow-icon">→</span>
      </a>
    </div>
    <Carousel />
  </section>
);

export default SuccessStories;

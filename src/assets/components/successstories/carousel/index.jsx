import React, { useState } from "react";
import CarouselCard from "../carouselcards";
import "./carousel.css";

// Use the techgen cabin image for demonstration
import cabinImg from "../../../images/techgenoffice.png";
import techgensuccessImg from "../../../images/techgensucces.jpg";
import techgen3Img from "../../../images/success2.jpg";

const stories = [
  {
    title: "e-LMS",
    desc: "e-Land Management system is a comprehensive solution for land allotment to post allotment...",
    img: techgensuccessImg,
    link: "#",
  },
  {
    title: "Single Window Portal",
    desc: "Single Window is an online system for approvals & sanctions for the establishments...",
    img: cabinImg,
    link: "#",
  },
  {
    title: "Success Story 3",
    desc: "Description for the third success story goes here.",
    img: techgen3Img, // Change this to the appropriate image if needed
    link: "#",
  },
  // Add more stories as needed
];

const Carousel = () => {
  const [start, setStart] = useState(0);
  const visible = 3;

  const next = () => setStart((s) => (s + visible < stories.length ? s + 1 : s));
  const prev = () => setStart((s) => (s > 0 ? s - 1 : s));

  return (
    <div className="carousel-wrapper">
      <button className="carousel-nav prev" onClick={prev} disabled={start === 0}>‹</button>
      <div className="carousel-cards">
        {stories.slice(start, start + visible).map((story, idx) => (
          <CarouselCard key={idx} {...story} />
        ))}
      </div>
      <button className="carousel-nav next" onClick={next} disabled={start + visible >= stories.length}>›</button>
    </div>
  );
};

export default Carousel;

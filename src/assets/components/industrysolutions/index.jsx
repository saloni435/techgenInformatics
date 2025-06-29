import React from "react";
import "./industrysolutions.css";

// Dummy Unsplash images for each industry
const healthcareImg = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"; // new healthcare image
const govtImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80";
const citizenImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
const miningImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"; // new mining image
const educationImg = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80";
const landImg = "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80";
const agricultureImg = "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"; // new agriculture image

const industries = [
    {
    name: "Agriculture",
    img: agricultureImg,
    desc: "Driving growth in agriculture with technology.",
    details: [
      "Unified Portal for Agriculture and Allied Services",
      "Soil Information System",
      "Seed Certification System",
      "Early Warning and Pest Monitoring System",
      "Farmer Registration System"
    ]
  },
  {
    name: "Citizen Services",
    img: citizenImg,
    desc: "Empowering citizens through digital services.",
  },
    {
    name: "Education",
    img: educationImg,
    desc: "Innovative education solutions for the future.",
  },
    {
    name: "Government Functions",
    img: govtImg,
    desc: "Digitizing governance for efficiency and transparency.",
  },
  {
    name: "Healthcare",
    img: healthcareImg,
    desc: "Innovative solutions for better health outcomes.",
  },
  {
    name: "Land & Industry",
    img: landImg,
    desc: "Streamlining land and industrial management.",
  },
  {
    name: "Mining",
    img: miningImg,
    desc: "Modernizing mining operations for sustainability.",
  },
  {
    name: "Defense",
    img: miningImg,
    desc: "Modernizing mining operations for sustainability.",
  }

];

const IndustrySolutions = () => (
  <>
    <h1 className="industry-solutions-title">Industry Solutions</h1>
    <div className="industry-solutions-container">
      {industries.map((industry) => (
        <div
          key={industry.name}
          className="industry-card"
          style={{ backgroundImage: `url(${industry.img})` }}
        >
          <div className="industry-card-overlay" />
          <div className="industry-card-title">
            {industry.name}
            <div className="industry-card-desc">{industry.desc}</div>
          </div>
          {industry.details && (
            <div className="industry-card-details">
              <h2>{industry.name}</h2>
              <ul>
                {industry.details.map((d, i) => (
                  <li key={i}>→ {d}</li>
                ))}
              </ul>
              <a href={industry.link} className="industry-view-all">
                View All Solutions <span className="arrow-icon">➔</span>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </>
);

export default IndustrySolutions;

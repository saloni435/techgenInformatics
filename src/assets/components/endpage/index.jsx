import React from "react";
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "Industries",
    items: [
      { name: "Agriculture", path: "/industries" },
      { name: "Citizen Services", path: "/industries" },
      { name: "Education", path: "/industries" },
      { name: "Food Security", path: "/industries" },
      { name: "Government Functions", path: "/industries" },
      { name: "Healthcare", path: "/industries" },
      { name: "Land & Industry", path: "/industries" },
      { name: "Mining", path: "/industries" },
      { name: "Smart City", path: "/industries" },
      { name: "Travel, Tourism & Hospitality", path: "/industries" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "AI & Allied Services", path: "/services" },
      { name: "Consulting & Allied Services", path: "/services" },
      { name: "Data & Analytics", path: "/services" },
      { name: "Emerging Technologies", path: "/services" },
      { name: "Engineering, Application & Transformation", path: "/services" },
      { name: "IT Facilities, Cybersecurity & Partner Services", path: "/services" },
    ],
  },
  {
    title: "About Us",
    items: [
      { name: "Our Story", path: "/about" },
      { name: "Team", path: "/about" },
      { name: "Vision & Mission", path: "/about" },
    ],
  },
  {
    title: "Other Links",
    items: [
      { name: "Contact Us", path: "/contact" },
      { name: "Feedback", path: "/feedback" },
      { name: "Career", path: "/career" },
      { name: "Cookie Policy", path: "/cookie-policy" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  },
];

const EndPage = () => (
  <footer style={{
    background: "linear-gradient(90deg, #181c2a 0%, #232a3d 100%)",
    color: "#bfc2c9",
    padding: "0",
    fontFamily: "Inter, Arial, sans-serif",
    borderTop: "2px solid #f36f21"
  }}>
    <div style={{
      maxWidth: 1300,
      margin: "0 auto",
      padding: "48px 24px 0 24px",
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem"
      }}>
        <span style={{
          fontSize: 28,
          color: "#f36f21",
          fontWeight: 700,
          letterSpacing: "1px"
        }}>Tech Gen Informatics</span>
        <span style={{
          fontSize: 16,
          color: "#bfc2c9",
          marginLeft: 12,
          fontWeight: 400
        }}>
          Empowering Digital Transformation
        </span>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "2.5rem 2rem",
        paddingBottom: "32px"
      }}>
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 10,
              letterSpacing: "0.5px"
            }}>{section.title}</h4>
            <div style={{
              borderBottom: "2px solid #f36f21",
              width: 36,
              margin: "0 0 16px 0"
            }} />
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 2,
              fontSize: 15
            }}>
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.path} style={{
                    color: "#bfc2c9",
                    textDecoration: 'none',
                    transition: "color 0.18s"
                  }}
                    onMouseOver={e => e.currentTarget.style.color = "#f36f21"}
                    onMouseOut={e => e.currentTarget.style.color = "#bfc2c9"}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: "1px solid #232a3d",
        padding: "18px 0 12px 0",
        textAlign: "center",
        color: "#7c7f8a",
        fontSize: 14
      }}>
        © {new Date().getFullYear()} Tech Gen Informatics. All rights reserved.
      </div>
    </div>
  </footer>
);

export default EndPage;
import React from "react"

const footerLinks = [
  {
    title: "Industries",
    items: [
      "Agriculture",
      "Citizen Services",
      "Education",
      "Food Security",
      "Government Functions",
      "Healthcare",
      "Land & Industry",
      "Mining",
      "Smart City",
      "Travel, Tourism & Hospitality",
    ],
  },
  {
    title: "Services",
    items: [
      "AI & Allied Services",
      "Consulting & Allied Services",
      "Data & Analytics",
      "Emerging Technologies",
      "Engineering, Application & Transformation",
      "IT Facilities, Cybersecurity & Partner Services",
    ],
  },
  {
    title: "About Us",
    items: [
      "Overview",
      "Leaders & Advisors",
      "Newsroom",
      "History",
      "Awards & Recognitions",
      "Philosophy",
      "Quality",
      "Code of Ethics",
      "Social Responsibility & Sustainability",
      "Policies at CSM",
      "Testimonials",
    ],
  },
  {
    title: "Other Links",
    items: [
      "Contact Us",
      "Feedback",
      "Career",
      "Recruitment Fraud Alert",
      "Privacy Policy",
      "Cookie Policy",
      "Terms of use",
      "Disclaimer",
      "Brand Name Disclaimer",
      "CSM Synapse",
      "Sitemap",
      "Konnecta",
    ],
  },
]

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
        {/* <img src="/logo.png" alt="Logo" style={{ width: 60, marginRight: 16 }} /> */}
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
                <li key={i} style={{
                  color: "#bfc2c9",
                  cursor: "pointer",
                  transition: "color 0.18s"
                }}
                  onMouseOver={e => e.currentTarget.style.color = "#f36f21"}
                  onMouseOut={e => e.currentTarget.style.color = "#bfc2c9"}
                >
                  {item}
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
)

export default EndPage

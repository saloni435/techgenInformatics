import React from "react";

const EndPage = () => (
  <footer style={{ background: "#11182a", color: "#bfc2c9", padding: "40px 0" }}>
    <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div style={{ flex: "1 1 180px", minWidth: 180 }}>
        {/* <img src="/logo.png" alt="CSM Logo" style={{ marginBottom: 30, width: 100 }} /> */}
        <span style={{ fontSize: 24, color: "#f36f21", fontWeight: "bold" }}>Tech Gen Informatics</span>
        {/* ...or use your logo import */}
      </div>
      <div style={{ flex: "2 1 900px", display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div>
          <h4 style={{ color: "#fff" }}>Industries</h4>
          <div style={{ borderBottom: "2px solid #f36f21", width: 40, margin: "6px 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Agriculture</li>
            <li>Citizen Services</li>
            <li>Education</li>
            <li>Food Security</li>
            <li>Government Functions</li>
            <li>Healthcare</li>
            <li>Land & Industry</li>
            <li>Mining</li>
            <li>Smart City</li>
            <li>Travel, Tourism & Hospitality</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#fff" }}>Services</h4>
          <div style={{ borderBottom: "2px solid #f36f21", width: 40, margin: "6px 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>AI & Allied Services</li>
            <li>Consulting & Allied Services</li>
            <li>Data & Analytics</li>
            <li>Emerging Technologies</li>
            <li>Engineering, Application & Transformation</li>
            <li>IT Facilities, Cybersecurity & Partner Services</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#fff" }}>About Us</h4>
          <div style={{ borderBottom: "2px solid #f36f21", width: 40, margin: "6px 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Overview</li>
            <li>Leaders & Advisors</li>
            <li>Newsroom</li>
            <li>History</li>
            <li>Awards & Recognitions</li>
            <li>Philosophy</li>
            <li>Quality</li>
            <li>Code of Ethics</li>
            <li>Social Responsibility & Sustainability</li>
            <li>Policies at CSM</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#fff" }}>Other Links</h4>
          <div style={{ borderBottom: "2px solid #f36f21", width: 40, margin: "6px 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>Career</li>
            <li>Recruitment Fraud Alert</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms of use</li>
            <li>Disclaimer</li>
            <li>Brand Name Disclaimer</li>
            <li>CSM Synapse</li>
            <li>Sitemap</li>
            <li>Konnecta</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default EndPage;

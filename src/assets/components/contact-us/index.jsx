import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const iconStyle = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#6c6c6c",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 16,
  color: "#fff",
  fontSize: 22,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
};

const callIconStyle = {
  ...iconStyle,
  background: "#2d1e8c",
  color: "#fff"
};

const linkedinStyle = {
  ...iconStyle,
  background: "#0077b5" // LinkedIn blue
};

const facebookStyle = {
  ...iconStyle,
  background: "#1877f3" // Facebook blue
};

const instagramStyle = {
  ...iconStyle,
  background: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
};

const whatsappStyle = {
  ...iconStyle,
  background: "#25d366" // WhatsApp green
};

const ContactUsBar = () => (
  <div style={{
    position: "fixed",
    left: 24,
    bottom: 24,
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
    <div style={callIconStyle}>
      {/* Replace with your call SVG/icon */}
      <span role="img" aria-label="call">📞</span>
    </div>
    <div style={linkedinStyle}>
      <FaLinkedinIn />
    </div>
    <div style={facebookStyle}>
      <FaFacebookF />
    </div>
    <div style={instagramStyle}>
      <FaInstagram />
    </div>
    <div style={whatsappStyle}>
      <FaWhatsapp />
    </div>
  </div>
);

export default ContactUsBar;

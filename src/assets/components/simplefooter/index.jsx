import React from 'react';
import { Link } from 'react-router-dom';
import './simplefooter.css';

const SimpleFooter = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-left">
        <span>Techgen Informatics</span>
      </div>
      <div className="footer-center">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="footer-right">
        <p>© {new Date().getFullYear()} Techgen Informatics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
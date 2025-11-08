import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import techgenLogo from "../assets/images/techgenlogo.png";
import "./simple-navbar.css";

const SimpleNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Industries", link: "/industries" },
    { name: "Career", link: "/career" },
  ];

  // About Us dropdown items (removed - now goes directly to About page)
  // const aboutUsItems = [
  //   { name: "Company", link: "/about/company" },
  //   { name: "Team", link: "/about/team" },
  //   { name: "History", link: "/about/history" }
  // ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile dropdown component
  const MobileDropdown = ({ name, items, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="mobile-dropdown">
        <button
          className="mobile-dropdown-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{name}</span>
          <span className={isOpen ? 'dropdown-arrow rotated' : 'dropdown-arrow'}>▼</span>
        </button>
        
        {isOpen && (
          <ul className="mobile-dropdown-content">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => {
                    setIsOpen(false);
                    onItemClick();
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const navigate = useNavigate();

  const handleNavClick = (e, item) => {
    // For in-page sections, scroll instead of navigating away
    if (item && (item.link === '/services' || item.link === '/industries')) {
      e.preventDefault();
      const id = item.link.replace('/', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
        return;
      }
      // fallback to route if section not on page
      navigate(item.link);
    }
  };

  return (
    <nav className={`simple-navbar ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Logo */}
      <div className="simple-nav-logo">
        <Link to="/">
          <img 
            src={techgenLogo} 
            alt="Tech Gen Informatics Logo" 
            className="h-10" 
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="simple-nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} onClick={(e) => handleNavClick(e, item)}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div className="mobile-menu-button">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {!isMobileMenuOpen ? "☰" : "✕"}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SimpleNavbar;
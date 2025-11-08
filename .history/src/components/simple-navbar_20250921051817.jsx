import React, { useState, useEffect } from "react";
import techgenLogo from "../assets/images/techgenlogo.png";
import "./simple-navbar.css";
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
              <a
                href={item.link}
                onClick={() => {
                  setIsOpen(false);
                  onItemClick();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function SimpleNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Industries", link: "/industries" },
    { name: "Career", link: "/career" },
  ];

  // About Us dropdown items
  const aboutUsItems = [
    { name: "Company", link: "/about/company" },
    { name: "Team", link: "/about/team" },
    { name: "History", link: "/about/history" }
  ];

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

  return (
    <nav className={`simple-navbar ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Logo */}
      <div className="simple-nav-logo">
        <a href="/">
          <img 
            src={techgenLogo} 
            alt="Tech Gen Informatics Logo" 
            className="h-12 w-auto" 
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <ul className="simple-nav-links">
        {navItems.map((item, index) => (
          <li key={index} className={item.name === "About Us" ? "simple-dropdown" : ""}>
            {item.name === "About Us" ? (
              <>
                <a href={item.link}>{item.name}</a>
                <ul className="simple-dropdown-content">
                  {aboutUsItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a href={item.link}>{item.name}</a>
            )}
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
                {item.name === "About Us" ? (
                  <MobileDropdown 
                    name={item.name} 
                    items={aboutUsItems} 
                    onItemClick={() => setIsMobileMenuOpen(false)} 
                  />
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
}

// Mobile dropdown component
function MobileDropdown({ name, items, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full">
      <button
        className="flex w-full items-center justify-between text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{name}</span>
        <svg className={`ml-1 h-4 w-4 transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="pl-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-blue-300 hover:bg-gray-700 px-3 py-2 text-sm"
              onClick={() => {
                setIsOpen(false);
                onItemClick();
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
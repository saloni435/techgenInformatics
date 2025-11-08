import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileDropdownItem,
} from "./ui/resizable-navbar.jsx";
import techgenLogo from "../assets/images/techgenlogo.png";

// Define AboutUsDropdown component
const AboutUsDropdown = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // About Us dropdown items
  const aboutUsItems = [
    { name: "Company", link: "/about/company" },
    { name: "Team", link: "/about/team" },
    { name: "History", link: "/about/history" }
  ];

  return (
    <div className="w-full">
      <button 
        className="flex w-full items-center justify-between text-white py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>About Us</span>
        <svg 
          className={`ml-1 h-4 w-4 transform ${isOpen ? "rotate-180" : ""}`} 
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="pl-4 py-1">
          {aboutUsItems.map((item, idx) => (
            <a
              key={`mobile-dropdown-${idx}`}
              href={item.link}
              className="block text-blue-300 py-2"
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
};

export default function ResizableNavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Industries", link: "/industries" },
    { name: "Career", link: "/career" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo>
            <img
              src={techgenLogo}
              alt="Tech Gen Informatics Logo"
              className="h-14 w-auto"
            />
          </NavbarLogo>
          <NavItems items={navItems} />
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
                <img
                src={techgenLogo}
                alt="Tech Gen Informatics Logo"
                className="h-12 w-auto"
                />
            </NavbarLogo>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
          >
            <AboutUsDropdown onItemClick={() => setIsMobileMenuOpen(false)} />
            
            {navItems.filter(item => item.name !== "About Us").map((item, idx) => (
              <div key={`mobile-item-${idx}`} className="w-full">
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-white block py-2"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
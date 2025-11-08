import React, { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar.js";
import techgenLogo from '../assets/images/techgenlogo.png';

// Custom NavbarLogo component for your project
const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src={techgenLogo}
        alt="Tech Gen Informatics Logo"
        className="h-12 w-auto"
      />
    </a>
  );
};

export default function NavbarDemo() {
  const navItems = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Industries",
      link: "/industries",
    },
    {
      name: "Career",
      link: "/career",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Services dropdown items
  const servicesDropdown = [
    { name: "Consulting", link: "/services/consulting" },
    { name: "Development", link: "/services/development" },
    { name: "Support", link: "/services/support" }
  ];

  // Function to handle dropdown toggle
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const handleDropdownToggle = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="bg-transparent dark:bg-transparent">
          <NavbarLogo />
          <div className="flex flex-1 justify-end">
            {navItems.map((item, idx) => (
              <div key={`nav-item-${idx}`} className="relative">
                <a
                  href={item.link}
                  className="px-6 py-2 text-white hover:text-blue-200 transition-colors"
                  onClick={(e) => {
                    if (item.name === "Services") {
                      e.preventDefault();
                      handleDropdownToggle("services");
                    }
                  }}
                >
                  {item.name}
                </a>
                {item.name === "Services" && activeDropdown === "services" && (
                  <div className="absolute top-full left-0 bg-white rounded shadow-lg py-2 min-w-48">
                    {servicesDropdown.map((service, i) => (
                      <a
                        key={`service-${i}`}
                        href={service.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-transparent dark:bg-transparent">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => {
                  if (item.name === "Services") {
                    handleDropdownToggle("mobileServices");
                    return;
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-neutral-600 dark:text-neutral-300 py-2"
              >
                <span className="block">{item.name}</span>
                {item.name === "Services" && activeDropdown === "mobileServices" && (
                  <div className="pl-4 mt-2">
                    {servicesDropdown.map((service, i) => (
                      <a
                        key={`mobile-service-${i}`}
                        href={service.link}
                        className="block py-2 text-blue-600"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
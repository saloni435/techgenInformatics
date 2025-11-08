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
} from "./ui/resizable-navbar.jsx";
import techgenLogo from "../assets/images/techgenlogo.png";

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
            {navItems.map((item, idx) => (
              <div key={`mobile-item-${idx}`} className="w-full">
                {item.name === "About Us" ? (
                  <MobileDropdownItem 
                    itemName={item.name} 
                    itemLink={item.link}
                    closeMenu={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-white block py-2"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
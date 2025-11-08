// This file provides the UI components for the resizable navbar
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function for className merging (cn)
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Assign motion to Motion to be consistent with the rest of the code
const Motion = motion;

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Simplified scroll handler for React
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.div
      ref={ref}
      // Changed to fixed positioning for better overlay on hero image
      className={cn("fixed inset-x-0 top-0 z-40 w-full bg-black", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child,
              { visible },
            )
          : child,
      )}
    </Motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <Motion.div
      animate={{
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.3)"
          : "none",
        width: visible ? "60%" : "100%",
        x: visible ? "-10%" : 0, // Shifts to left when scrolled
        scale: visible ? 0.9 : 1, // Slightly smaller when scrolled
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: visible ? "auto" : "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto flex w-full max-w-7xl flex-row items-center self-start bg-black px-4 py-2",
        visible && "bg-black rounded-r-full",
        className,
      )}
    >
      {children}
    </Motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // About us dropdown items
  const aboutUsItems = [
    { name: "Company", link: "/about/company" },
    { name: "Team", link: "/about/team" },
    { name: "History", link: "/about/history" }
  ];

  const handleDropdownToggle = (itemName, e) => {
    e.preventDefault();
    if (activeDropdown === itemName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemName);
    }
  };

  return (
    <div
      onMouseLeave={() => {
        setHovered(null);
        setActiveDropdown(null);
      }}
      className={cn(
        "flex flex-1 flex-row items-center justify-start ml-12 space-x-6 text-sm font-medium text-white transition duration-200 hover:text-zinc-200",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div key={`nav-item-${idx}`} className="relative">
          <a
            onMouseEnter={() => setHovered(idx)}
            onClick={item.name === "About Us" ? (e) => handleDropdownToggle("aboutUs", idx, e) : onItemClick}
            className="relative px-4 py-2 text-white dark:text-white cursor-pointer"
            key={`link-${idx}`}
            href={item.link}
          >
            {hovered === idx && (
              <Motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-700/20 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20 flex items-center">
              {item.name}
              {item.name === "About Us" && (
                <svg 
                  className={`ml-1 h-4 w-4 transform ${activeDropdown === "aboutUs" ? "rotate-180" : ""}`} 
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M7 10l5 5 5-5z" />
                </svg>
              )}
            </span>
          </a>
          {item.name === "About Us" && activeDropdown === "aboutUs" && (
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 z-20 mt-1 w-48 rounded-md bg-white py-2 shadow-lg"
            >
              {aboutUsItems.map((subItem, subIdx) => (
                <a
                  key={`sub-link-${subIdx}`}
                  href={subItem.link}
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {subItem.name}
                </a>
              ))}
            </Motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <Motion.div
      animate={{
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.3)"
          : "none",
        width: visible ? "80%" : "100%",
        x: visible ? "10%" : 0, // Shifts to right on mobile when scrolled
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "0",
        y: visible ? 5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-black px-0 py-2 lg:hidden",
        visible && "bg-black",
        className,
      )}
    >
      {children}
    </Motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-black px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}) => {
  return isOpen ? (
    <button onClick={onClick} className="text-white">✕</button>
  ) : (
    <button onClick={onClick} className="text-white">☰</button>
  );
};

export const NavbarLogo = ({ children }) => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      {children || (
        <>
          <img
            src="https://assets.aceternity.com/logo-dark.png"
            alt="logo"
            width={30}
            height={30}
          />
          <span className="font-medium text-black dark:text-white">Startup</span>
        </>
      )}
    </a>
  );
};

// Make sure this component is properly exported
export const MobileDropdownItem = ({ itemName, closeMenu }) => {
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
        <span>{itemName}</span>
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
                closeMenu();
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

export const NavbarButton = ({
  href,
  as,
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const Tag = as || "a";
  
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
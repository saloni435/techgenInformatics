import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // You'll need to create this CSS file
import techgenLogo from '../../images/techgenlogo.png'; // Update path as needed


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  // const handleDropdownToggle = (dropdown) => {
  //   setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  // };

  // const navItems = [
  //   {
  //     name: 'About Us',
  //     path: '/about',
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: 'Our Story', path: '/about/story' },
  //       { name: 'Team', path: '/about/team' },
  //       { name: 'Vision & Mission', path: '/about/vision' },
  //     ]
  //   },
  //   {
  //     name: 'Services',
  //     path: '/services',
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: 'Consulting', path: '/services/consulting' },
  //       { name: 'Development', path: '/services/development' },
  //       { name: 'Support', path: '/services/support' },
  //     ]
  //   },
  //   {
  //     name: 'Industries',
  //     path: '/industries',
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: 'Agriculture', path: '/industries/agriculture' },
  //       { name: 'Citizen Services', path: '/industries/citizen-services' },
  //       { name: 'Education', path: '/industries/education' },
  //       { name: 'Government Functions', path: '/industries/government-functions' },
  //       { name: 'Healthcare', path: '/industries/healthcare' },
  //       { name: 'Land & Industry', path: '/industries/land-industry' },
  //       { name: 'Mining', path: '/industries/mining' },
  //       { name: 'Defense', path: '/industries/defense' }
  //     ]
  //   },
  //   {
  //     name: 'Career',
  //     path: '/career',
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: 'Open Positions', path: '/career/positions' },
  //       { name: 'Work Culture', path: '/career/culture' },
  //       { name: 'Benefits', path: '/career/benefits' },
  //     ]
  //   },
  // ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={techgenLogo} alt="Tech Gen Informatics Logo" className="logo" />
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {/* {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              {item.hasDropdown ? (
                <>
                  <div 
                    className="nav-links" 
                    onClick={() => handleDropdownToggle(index)}
                  >
                    {item.name} <i className={`fas fa-caret-down ${activeDropdown === index ? 'rotate' : ''}`}></i>
                  </div>
                  <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <Link 
                          to={dropdownItem.path} 
                          className="dropdown-link"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className="nav-links"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

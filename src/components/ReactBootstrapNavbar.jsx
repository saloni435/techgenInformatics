import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import techgenLogo from '../assets/images/techgenlogo.png';

const ReactBootstrapNavbar = () => {
  const navItems = [
    {
      name: 'About Us',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Team', path: '/about/team' },
        { name: 'Vision & Mission', path: '/about/vision' },
      ]
    },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Consulting', path: '/services/consulting' },
        { name: 'Development', path: '/services/development' },
        { name: 'Support', path: '/services/support' },
      ]
    },
    {
      name: 'Industries',
      path: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Agriculture', path: '/industries/agriculture' },
        { name: 'Citizen Services', path: '/industries/citizen-services' },
        { name: 'Education', path: '/industries/education' },
        { name: 'Government Functions', path: '/industries/government-functions' },
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'Land & Industry', path: '/industries/land-industry' },
        { name: 'Mining', path: '/industries/mining' },
        { name: 'Defense', path: '/industries/defense' }
      ]
    },
    {
      name: 'Career',
      path: '/career',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Open Positions', path: '/career/positions' },
        { name: 'Work Culture', path: '/career/culture' },
        { name: 'Benefits', path: '/career/benefits' },
      ]
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={techgenLogo}
            alt="Tech Gen Informatics Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => {
              if (item.hasDropdown) {
                return (
                  <NavDropdown title={item.name} id={`dropdown-${index}`} key={index}>
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <NavDropdown.Item as={Link} to={dropdownItem.path} key={idx}>
                        {dropdownItem.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Link as={Link} to={item.path} key={index}>
                    {item.name}
                  </Nav.Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ReactBootstrapNavbar;
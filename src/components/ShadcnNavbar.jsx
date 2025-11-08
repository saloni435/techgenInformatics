import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import techgenLogo from '../assets/images/techgenlogo.png';

const ShadcnNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={techgenLogo}
            alt="Tech Gen Informatics Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="text-white hover:text-accent-foreground">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-1 p-4">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <NavigationMenuLink key={idx} asChild>
                            <Link
                              to={dropdownItem.path}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">
                                {dropdownItem.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-accent-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b md:hidden">
            <div className="container px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <>
                        <Link
                          to={item.path}
                          className="block text-sm font-medium text-white hover:text-accent-foreground py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <div className="ml-4 space-y-2">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              to={dropdownItem.path}
                              className="block text-sm text-muted-foreground hover:text-accent-foreground py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="block text-sm font-medium text-white hover:text-accent-foreground py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ShadcnNavbar;
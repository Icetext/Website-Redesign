import React, { useState } from 'react';
import type { Page } from '../App';

interface HeaderProps {
    onNavigate: (page: Page) => void;
}

const navLinks: { name: Page, href: string }[] = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Our Businesses', href: '#' },
  { name: 'Investor Relations', href: '#' },
  { name: 'News', href: '#' },
  { name: 'Contact', href: '#' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('Home'); }} className="text-2xl font-bold text-gray-800 hover:text-blue-700">
            Berkshire Hathaway Inc.
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.name); }} className="text-gray-600 hover:text-blue-700 transition duration-300 font-medium">
                {link.name}
              </a>
            ))}
             <button onClick={() => handleLinkClick('Contact')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                    <a href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.name); }} className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-md">
                        {link.name}
                    </a>
                </li>
              ))}
              <li>
                <button onClick={() => handleLinkClick('Contact')} className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

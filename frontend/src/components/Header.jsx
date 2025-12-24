import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Cloud', path: '/cloud-services' },
    { name: 'AI Solutions', path: '/ai-services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">Rubicorn</h1>
            <p className="text-xs text-gray-500">Technologies</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-all duration-300 hover:text-purple-600 relative group ${
                location.pathname === link.path ? 'text-purple-600' : 'text-gray-700'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block neon-button text-sm">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium transition-colors hover:text-purple-600 ${
                location.pathname === link.path ? 'text-purple-600' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="neon-button w-full text-sm">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

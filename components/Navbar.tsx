"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#profile' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Activity', href: '#activity' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-2xl font-bold tracking-tighter transition-colors ${
                scrolled ? 'text-gray-900' : 'text-gray-900 md:text-white text-shadow-sm'
              }`}
            >
              Arsa Wayan
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-amber-600' 
                      : 'text-white hover:text-amber-300 text-shadow-sm'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu className="block h-6 w-6" /> : <X className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

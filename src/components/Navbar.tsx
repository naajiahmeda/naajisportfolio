'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CREATIVE', href: '#creative' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050605]/90 backdrop-blur-md border-b border-[#14200A]/80 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 focus:outline-none"
        >
          <div className="w-2.5 h-2.5 bg-[#B7FF00] rounded-none group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#B7FF00]" />
          <span className="font-heading text-xl sm:text-2xl tracking-widest text-white group-hover:text-[#B7FF00] transition-colors duration-200">
            NAAJI AHMED ALI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-tech text-xs tracking-[0.2em] uppercase transition-colors duration-200 py-1 ${
                  isActive ? 'text-[#B7FF00] font-semibold' : 'text-[#A1A1A1] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B7FF00] shadow-[0_0_6px_#B7FF00]" />
                )}
              </a>
            );
          })}

          {/* Quick CTA */}
          <a
            href="mailto:naajiahmeda@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 border border-[#B7FF00]/40 text-[#B7FF00] hover:bg-[#B7FF00] hover:text-[#050605] font-tech text-xs tracking-widest font-semibold transition-all duration-200"
          >
            LET'S TALK
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="mailto:naajiahmeda@gmail.com"
            className="px-3 py-1.5 border border-[#B7FF00]/40 text-[#B7FF00] font-tech text-xs tracking-wider"
          >
            TALK
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#B7FF00] focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#B7FF00]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050605] border-b border-[#14200A] px-6 py-8 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-heading text-2xl tracking-wider py-1 flex items-center justify-between border-b border-[#14200A]/60 ${
                    isActive ? 'text-[#B7FF00]' : 'text-[#A1A1A1] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 bg-[#B7FF00]" />}
                </a>
              );
            })}
            <div className="pt-4">
              <a
                href="mailto:naajiahmeda@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#B7FF00] text-[#050605] font-heading text-lg tracking-wider font-bold"
              >
                LET'S TALK <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


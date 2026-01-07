"use client";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#technologies", label: "Technologies" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <FaCode size={20} />
            </div>
            <span className="text-xl font-bold gradient__text">Ebenezer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex space-x-3">
              <Link 
                href="https://github.com/ebenezeryo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 hover-lift"
              >
                <AiFillGithub size={20} />
              </Link>
              <Link 
                href="https://linkedin.com/in/ebenco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover-lift"
              >
                <AiFillLinkedin size={20} />
              </Link>
              <Link 
                href="https://instagram.com/e.b.e.n.c.o" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover-lift"
              >
                <AiFillInstagram size={20} />
              </Link>
            </div>
            <button className="btn-primary text-white font-semibold py-2 px-4 rounded-lg text-sm ml-4">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300" 
            onClick={toggleNav}
          >
            {isNavOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isNavOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex space-x-4 pt-4 border-t border-gray-800">
                <Link 
                  href="https://github.com/ebenezeryo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <AiFillGithub size={24} />
                </Link>
                <Link 
                  href="https://linkedin.com/in/ebenco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <AiFillLinkedin size={24} />
                </Link>
                <Link 
                  href="https://instagram.com/e.b.e.n.c.o" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <AiFillInstagram size={24} />
                </Link>
              </div>
              
              <button className="btn-primary text-white font-semibold py-3 px-6 rounded-lg mt-4 w-full">
                Contact Me
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

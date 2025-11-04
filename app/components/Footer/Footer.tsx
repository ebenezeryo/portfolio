"use client";

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="animate-fadeInUp">
            <h3 className="text-xl font-bold mb-4 gradient__text">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <span>ebenezery.oluwafemi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-blue-400" />
                <span>+234 802 919 3512</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 gradient__text">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                About Me
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Projects
              </Link>
              <Link href="#skills" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Skills
              </Link>
              <Link href="#experience" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Experience
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 gradient__text">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <Link 
                href="https://github.com/ebenco7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover-lift"
              >
                <AiFillGithub size={24} />
              </Link>
              <Link 
                href="https://linkedin.com/in/ebenco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 hover-lift"
              >
                <AiFillLinkedin size={24} />
              </Link>
              <Link 
                href="https://instagram.com/e.b.e.n.c.o" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-all duration-300 hover-lift"
              >
                <AiFillInstagram size={24} />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Let's connect and discuss opportunities in data analytics and web development.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Ebenezer Oluwafemi. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Crafted by eolab
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover-lift transition-all duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

"use client"; 

import React from 'react';
import { FaArrowDown, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I am <span className="gradient__text">Ebenezer</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
            Data Analyst & Frontend Developer
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            I transform complex data into actionable business insights and create visually compelling reports. 
            Passionate about using data storytelling to drive strategic decisions and business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="btn-primary text-white font-semibold py-4 px-8 rounded-lg hover-lift flex items-center gap-2"
            >
              View My Work
              <FaArrowDown className="animate-bounce" />
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              About Me
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/ebenco" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover-lift"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="https://github.com/ebenco7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover-lift"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://instagram.com/e.b.e.n.c.o" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 hover-lift"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

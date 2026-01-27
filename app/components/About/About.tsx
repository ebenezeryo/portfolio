"use client";

import React from 'react';
import { FaDownload, FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaBriefcase, label: "Projects Completed", value: "17+" },
    { icon: FaGraduationCap, label: "Years Experience", value: "3+" },
    { icon: FaUser, label: "Happy Clients", value: "50+" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient__text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-6">Data Analyst & Frontend Developer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming complex data into clear, actionable business insights and designing user‑centric digital solutions. Skilled in creating visually compelling dashboards and reports that drive strategic decisions and business growth. Passionate about data storytelling, blending analytical expertise with frontend development to deliver impactful outcomes for organizations.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My technical skills span across multiple platforms including Power BI, Excel, SQL, Python, and modern 
              web technologies. I excel at creating compelling dashboards and reports that tell meaningful stories 
              through data visualization.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Data Analysis</span>
              <span className="px-4 py-2 bg-purple-600 rounded-full text-sm">Business Intelligence</span>
              <span className="px-4 py-2 bg-green-600 rounded-full text-sm">Data Visualization</span>
              <span className="px-4 py-2 bg-orange-600 rounded-full text-sm">Statistical Analysis</span>
            </div>

            <button className="btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover-lift">
              <FaDownload />
              Download Resume
            </button>
          </div>

          <div className="animate-fadeInUp">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="professional-card p-6 rounded-lg hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <stat.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                      <p className="text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
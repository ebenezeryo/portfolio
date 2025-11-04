import React from 'react';
import { SiPowerbi, SiMicrosoftexcel,SiTableau, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { FaNodeJs, FaReact, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Technologies() {
  const technologies = [
    { name: "Power BI", icon: SiPowerbi, category: "Data Analytics", color: "text-yellow-400" },
    { name: "Excel", icon: SiMicrosoftexcel, category: "Data Analytics", color: "text-green-400" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, category: "Database", color: "text-blue-400" },
    { name: "Tableau", icon: SiTableau, category: "Data Analytics", color: "text-orange-400" },
    { name: "Python", icon: IoLogoPython, category: "Programming", color: "text-yellow-300" },
    { name: "Node.js", icon: FaNodeJs, category: "Backend", color: "text-green-500" },
    { name: "React", icon: FaReact, category: "Frontend", color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, category: "Frontend", color: "text-teal-400" },
    { name: "TypeScript", icon: SiTypescript, category: "Programming", color: "text-blue-500" },
    { name: "HTML5", icon: FaHtml5, category: "Frontend", color: "text-orange-500" },
  ];

  return (
    <section id="technologies" className="section-padding bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient__text">Technologies & Tools</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I have extensive experience working with a comprehensive range of tools across the entire data lifecycle - 
            from data collection and cleaning to advanced analytics, visualization, and web development.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="professional-card p-6 rounded-xl hover-lift animate-fadeInUp group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon size={48} />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;

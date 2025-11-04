"use client";

import React from 'react';
import { SiPowerbi, SiMicrosoftexcel, SiTableau, SiTypescript, SiPython } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analytics",
      skills: [
        { name: "Power BI", icon: SiPowerbi, level: 95 },
        { name: "Excel", icon: SiMicrosoftexcel, level: 90 },
        { name: "Python", icon: SiPython, level: 85 },
        { name: "SQL", icon: BiLogoPostgresql, level: 88 },
        { name: "Tableau", icon: SiTableau, level: 80 },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: FaReact, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, level: 90 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient__text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proficient in a comprehensive range of tools and technologies for data analysis and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fadeInUp">
              <h3 className="text-2xl font-semibold mb-8 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="professional-card p-6 rounded-lg hover-lift">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-2xl text-blue-400" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
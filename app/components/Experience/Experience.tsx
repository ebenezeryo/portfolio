"use client";

import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Data Analyst/Chief Admin",
      company: "Jimeto Group of Companies.",
      period: "2025 - Present",
      description: [
        "Led data analysis projects resulting in 25% improvement in business efficiency",
        "Developed comprehensive Power BI dashboards for executive reporting",
        "Collaborated with cross-functional teams to identify key business metrics",
        "Implemented automated reporting systems reducing manual work by 60%"
      ],
      technologies: ["Power BI", "SQL", "Python", "Excel"]
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Quantum Analytics",
      period: "2024 - 2024",
      description: [
        "Analyzed large datasets to identify trends and patterns for business insights",
        "Created interactive dashboards and reports for stakeholder presentations",
        "Performed statistical analysis and data modeling for predictive analytics",
        "Collaborated with business teams to translate requirements into analytical solutions"
      ],
      technologies: ["Excel", "SQL", "Tableau", "Python"]
    },
    {
      id: 3,
      title: "Junior Data Analyst",
      company: "Chrisland School Limited",
      period: "2014 - 2024",
      description: [
        "Supported senior analysts in data collection and cleaning processes",
        "Developed basic reports and visualizations using Excel and Power BI",
        "Assisted in database management and data quality assurance",
        "Participated in training programs to enhance analytical skills"
      ],
      technologies: ["Excel", "Power BI", "SQL"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient__text">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My journey in data analytics and the impact I&apos;ve made across different organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hidden md:block"></div>
                
                <div className="md:ml-20">
                  <div className="professional-card p-8 rounded-lg hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <h4 className="text-lg text-blue-400 mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaCalendarAlt />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
// components/Projects.tsx
"use client"
import React, { useState, CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '../Data/projectData'; // Adjust the import path as needed
import { Project } from '@/public/types'; // Correct the import path for types

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  // Select specific projects by IDs when no category is selected
  const defaultProjects = projectData.filter((project) => [1, 3, 6].includes(project.id));
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projectData.filter((project) => project.category === selectedCategory)
    : defaultProjects;

  const baseButtonStyle: CSSProperties = {
    background: 'linear-gradient(170deg, rgba(200, 200, 200, 1) 0%, rgba(100, 180, 200, 1) 0%, rgba(190, 120, 190, 1) 75%)',
  };

  const hoveredButtonStyle: CSSProperties = {
    background: 'linear-gradient(170deg, rgba(170, 170, 170, 1) 0%, rgba(80, 150, 170, 1) 0%, rgba(160, 90, 160, 1) 75%)',
  };

  const handleLearnMoreClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-padding bg-gray-950 text-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient__text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of data analysis projects showcasing expertise in business intelligence, 
            data visualization, and actionable insights generation.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-gray-800 rounded-lg">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === null 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setSelectedCategory('Power BI')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'Power BI' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Power BI
            </button>
            <button
              onClick={() => setSelectedCategory('Excel')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'Excel' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Excel
            </button>
            <button
              onClick={() => setSelectedCategory('SQL')}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'SQL' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              SQL
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index) => (
            <div 
              key={project.id} 
              className="professional-card p-6 rounded-xl hover-lift animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h4>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => handleLearnMoreClick(project.linkedin)}
                  className="flex-1 btn-primary text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300"
                >
                  View Details
                </button>
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

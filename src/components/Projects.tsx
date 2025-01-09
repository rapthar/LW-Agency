import React from 'react';
import ParallaxSection from './ParallaxSection';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AcePlace- Bolt Template',
      category: 'Web Design',
      image: '/AcePlace- Bolt Template.jpg',
      year: '2024'
    },
    {
      id: 2,
      title: 'Daily ToDo List App',
      category: 'Mobile App',
      image: '/Daily ToDo List App.jpg',
      year: '2024'
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      category: 'Web App',
      image: '/Finance Dashboard.jpg',
      year: '2024'
    },
    {
      id: 4,
      title: 'Malta CRM Dashboard',
      category: 'Web App',
      image: '/Malta CRM Dashboard.jpg',
      year: '2024'
    },
    {
      id: 5,
      title: 'Subminder Dashboard',
      category: 'Web App',
      image: '/Subminder Dashboard.jpg',
      year: '2024'
    },
    {
      id: 6,
      title: 'Sync- bolt Admin Template',
      category: 'Web Design',
      image: '/Sync- bolt new Admin Template copy.jpg',
      year: '2024'
    }
  ];

  return (
    <ParallaxSection className="bg-gray-50 py-16" speed={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection className="flex justify-between items-end mb-16" speed={0.15}>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-xl">
              Explore our latest projects and see how we help brands achieve their goals.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-orange-500 hover:gap-4 transition-all">
            View All Projects
            <ArrowRight size={20} />
          </a>
        </ParallaxSection>

        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ParallaxSection
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              speed={0.15}
              direction="up"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between items-center text-white/90 mb-3">
                    <span className="text-sm uppercase tracking-wider bg-orange-500/90 px-3 py-1 rounded-full">{project.category}</span>
                    <span className="text-sm font-light">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 transform group-hover:translate-y-0 translate-y-8 transition-transform duration-300 line-clamp-2">{project.title}</h3>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-white gap-2 hover:gap-4 transition-all transform group-hover:translate-y-0 translate-y-8 transition-transform duration-300 hover:text-orange-400"
                  >
                    View Project <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-orange-500 hover:gap-4 transition-all">
            View All Projects
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}
"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Helper function: Name aur Title se clean SEO URL (slug) banane ke liye
const generateSlug = (studentName, title) => {
  const combined = `${studentName || ''} ${title || ''}`.trim();
  if (!combined) return 'project';
  
  return combined
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Special characters hatao
    .trim()
    .replace(/\s+/g, '-')         // Spaces ko hyphen (-) me badlo
    .replace(/-+/g, '-');        // Multiple hyphens ko single karo
};

const CorporateProjects = ({ 
  projectsData = [], 
  title = "Real corporate projects" 
}) => {
  if (!projectsData || !projectsData.length) return null;

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Section */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase bg-[#046AED]/10 text-[#046AED] px-2.5 py-0.5 rounded-full border border-[#046AED]/20">
              REAL CORPORATE PROJECTS
            </span>
            <span className="text-gray-300">—</span>
            <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">
              LIVE WORK
            </span>
          </div>

          {title && (
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
              {title}
            </h2>
          )}
        </div>

        {/* 3-Column Image Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => {
            // URL Slug Generate karna (Pehle manual slug check karega, nahi mila toh auto-generate karega)
            const projectSlug = project.slug || generateSlug(project.studentName, project.title);

            return (
              <Link 
                key={project.id || index} 
                href={`/projects/${projectSlug}`} 
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#046AED]/20 flex flex-col justify-between cursor-pointer"
              >
                {/* Media Container / Placeholder Area */}
                <div className="relative aspect-[4/3] bg-gray-100/70 group-hover:bg-[#046AED]/5 flex items-center justify-center p-6 overflow-hidden transition-colors duration-300 border-b border-gray-100">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <span className="text-[11px] font-mono tracking-wider text-gray-400 group-hover:text-[#046AED] transition-colors duration-300 uppercase">
                        [ {project.placeholderText || 'preview screenshot'} ]
                      </span>
                    </div>
                  )}
                </div>

                {/* Title Strip bottom area */}
                <div className="p-5 bg-white group-hover:bg-gray-50/50 transition-colors duration-300">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#046AED] transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.studentName && (
                    <p className="text-xs text-gray-500 mt-1">By {project.studentName}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

CorporateProjects.propTypes = {
  projectsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      slug: PropTypes.string,
      title: PropTypes.string.isRequired,
      placeholderText: PropTypes.string,
      imageUrl: PropTypes.string,
      studentName: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default CorporateProjects;
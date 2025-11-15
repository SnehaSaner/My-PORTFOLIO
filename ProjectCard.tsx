import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-dark-bg border border-neon-magenta/30 rounded-lg p-6 flex flex-col h-full group transition-all duration-300 hover:border-neon-magenta hover:shadow-neon-magenta transform hover:-translate-y-2">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-neon-magenta transition-colors duration-300">{project.title}</h3>
             <div className="flex items-center space-x-4 text-gray-400">
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-neon-magenta transition-colors duration-300">
                        <Github size={24} />
                    </a>
                )}
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-neon-magenta transition-colors duration-300">
                        <ExternalLink size={24} />
                    </a>
                )}
            </div>
        </div>
        
        <ul className="space-y-2 mb-4 text-gray-400">
          {project.description.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neon-magenta mr-2 mt-1">&#9679;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neon-magenta/20">
        {project.tags.map(tag => (
          <span key={tag} className="bg-neon-magenta/10 text-neon-magenta text-xs font-bold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
};
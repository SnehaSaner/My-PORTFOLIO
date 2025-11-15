import React from 'react';
import { Experience } from '../types';
import { Briefcase, MapPin } from 'lucide-react';

export const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="relative pl-10 md:pl-16 border-l-2 border-neon-cyan/30">
        <div className="absolute -left-4 top-0 h-8 w-8 bg-neon-cyan rounded-full flex items-center justify-center shadow-neon-cyan">
            <Briefcase size={18} className="text-dark-bg" />
        </div>
        <div className="ml-4">
            <p className="absolute -left-1/2 md:left-auto md:-top-3 md:right-full md:mr-8 text-sm text-neon-cyan font-semibold whitespace-nowrap bg-dark-bg px-2">{experience.duration}</p>
            <h3 className="text-2xl font-bold font-orbitron text-white">{experience.role}</h3>
            <div className="flex items-center space-x-4 mt-1 text-gray-400">
                <p className="font-semibold text-neon-cyan/80">{experience.company}</p>
                <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{experience.location}</span>
                </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-300">
                {experience.points.map((point, index) => (
                    <li key={index} className="flex">
                        <span className="text-neon-cyan mr-2">&#8227;</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};
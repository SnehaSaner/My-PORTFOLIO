
import React from 'react';

interface SkillTagProps {
  skill: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <div className="bg-gray-800/50 border border-neon-cyan/30 text-gray-300 text-sm md:text-base font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-neon-cyan/20 hover:text-neon-cyan hover:shadow-neon-cyan transform hover:-translate-y-1">
      {skill}
    </div>
  );
};

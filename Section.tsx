
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase text-white">
          {title}
          <span className="text-neon-cyan">.</span>
        </h2>
        <div className="w-24 h-1 bg-neon-cyan mx-auto mt-4 rounded-full shadow-neon-cyan"></div>
      </div>
      {children}
    </section>
  );
};

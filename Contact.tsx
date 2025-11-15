
import React from 'react';
import { SocialLink } from '../types';

interface ContactProps {
  socialLinks: SocialLink[];
}

export const Contact: React.FC<ContactProps> = ({ socialLinks }) => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl md:text-5xl font-orbitron font-bold uppercase text-white">
        Connect With Me<span className="text-neon-magenta">.</span>
      </h2>
      <div className="w-24 h-1 bg-neon-magenta mx-auto mt-4 rounded-full shadow-neon-magenta"></div>
      <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-300">
        I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out!
      </p>
      <a 
        href="mailto:sanersneha13@gmail.com" 
        className="mt-8 inline-block px-10 py-4 border-2 border-neon-magenta text-neon-magenta font-bold rounded-full uppercase tracking-widest hover:bg-neon-magenta hover:text-dark-bg hover:shadow-neon-magenta transition-all duration-300 transform hover:scale-105"
      >
        Say Hello
      </a>
      <div className="mt-12 flex justify-center space-x-6">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-gray-400 hover:text-neon-magenta transition-transform duration-300 hover:scale-125"
          >
            <link.icon size={32} />
          </a>
        ))}
      </div>
    </section>
  );
};

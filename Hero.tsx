
import React from 'react';

export const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black uppercase tracking-wider text-white">
          Sneha Saner
        </h1>
        <h1 className="absolute top-0 left-0 w-full h-full text-5xl md:text-7xl lg:text-8xl font-orbitron font-black uppercase tracking-wider text-neon-cyan opacity-80 animate-text-glitch" style={{ textShadow: '0 0 10px #00f5ff' }}>
          Sneha Saner
        </h1>
      </div>
      <p className="mt-4 text-lg md:text-2xl text-gray-300 font-rajdhani font-light tracking-widest">
        Data-Driven Engineer & AI Enthusiast
      </p>
      <button 
        onClick={handleScrollToContact}
        className="mt-8 px-8 py-3 border-2 border-neon-cyan text-neon-cyan font-bold rounded-full uppercase tracking-widest hover:bg-neon-cyan hover:text-dark-bg hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-105"
      >
        Get In Touch
      </button>
    </section>
  );
};

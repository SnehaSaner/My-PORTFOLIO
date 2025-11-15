
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillTag } from './components/SkillTag';
import { CertificationItem } from './components/CertificationItem';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  PROJECTS,
  EXPERIENCES,
  CERTIFICATIONS,
  SKILLS,
  SOCIAL_LINKS,
  SUMMARY,
} from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen overflow-hidden">
      <Header activeSection={activeSection} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />

        <Section id="about" title="About Me">
          <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed">
            {SUMMARY}
          </p>
        </Section>

        <Section id="skills" title="Technical Arsenal">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="text-xl md:text-2xl font-bold font-orbitron text-neon-magenta mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {skills.map(skill => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Core Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications & Achievements">
          <div className="max-w-3xl mx-auto space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <CertificationItem key={index} title={cert.title} detail={cert.detail} />
            ))}
          </div>
        </Section>

        <Contact socialLinks={SOCIAL_LINKS} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

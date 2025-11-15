
import { LucideProps } from 'lucide-react';
import React from 'react';

export interface Project {
  title: string;
  tags: string[];
  description: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface Certification {
  title: string;
  detail: string;
}

export interface SkillCategory {
  [key: string]: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

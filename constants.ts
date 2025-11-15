import { Project, Experience, Certification, SkillCategory, SocialLink } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SUMMARY = "Data-driven Final Year B.Tech (Computer Engineering) specializing in SQL, Python, and Predictive Modeling. Proven ability to solve complex data challenges. Proficient in Tableau visualization, Data Modeling, and Agile project delivery.";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/SnehaSaner', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sneha-saner', icon: Linkedin },
  { name: 'Email', url: 'mailto:sanersneha13@gmail.com', icon: Mail },
];

export const SKILLS: SkillCategory = {
  "Languages": ["C/C++", "Python", "SQL", "JavaScript"],
  "Data & Tools": ["MySQL Workbench", "Jupyter Notebook", "Tableau", "Git/GitHub", "MongoDB"],
  "Web/Frameworks": ["React", "REST APIs", "HTML", "CSS", "Node.js"],
  "Core Concepts": ["Business Intelligence", "Feature Engineering", "Data Structures", "Algorithms", "OOP", "Agile", "System Design"]
};

export const PROJECTS: Project[] = [
  {
    title: "AgriPredict",
    tags: ["Random Forest", "REST APIs", "React", "Git"],
    description: [
      "Built an AI-powered platform using Random Forest regression, analyzing weather, soil, and seasonal data for 500+ acres.",
      "Improved crop yield prediction accuracy by 18%.",
      "Configured a responsive dashboard in React to optimize crop planning, reducing planning time by 30%."
    ],
    githubLink: "https://github.com/SnehaSaner"
  },
  {
    title: "EmoLink",
    tags: ["Python", "ESP32-CAM", "CNN", "IoT"],
    description: [
      "Engineered an automated IoT system capturing facial expressions to dynamically adjust Spotify playback for 50+ users.",
      "Achieved 92% accuracy with CNN model; integrated ESP32-CAM for low-latency real-time inference.",
      "Enabled hands-free interaction for physically challenged users, reducing manual intervention by 40%."
    ],
    githubLink: "https://github.com/SnehaSaner"
  },
  {
    title: "Vichaar - Research Management System",
    tags: ["React", "Node.js", "MySQL", "Full-stack"],
    description: [
      "Designed and implemented a robust MySQL database schema for a full-stack platform, managing over 200 publications and 50 mentorship workflows.",
      "Implemented role-based access, REST APIs, automated reports, and mentor-student mapping."
    ],
    githubLink: "https://github.com/SnehaSaner"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Cyber Security Intern",
    company: "NIIT Foundation",
    duration: "Jun 2025 – Present",
    location: "Remote",
    points: [
      "Conducted vulnerability assessments using Wireshark & Nmap on 50+ devices, identifying 10+ critical security risks.",
      "Reduced potential breaches by 20% through proactive identification and reporting.",
      "Prepared actionable reports and remediation plans, improving network security protocols and reducing incident response time by 15%."
    ]
  },
  {
    role: "AI Intern",
    company: "Acmegrade, IIT Bombay",
    duration: "Aug 2024 – Oct 2024",
    location: "Remote",
    points: [
      "Engineered predictive customer churn model with logistic regression, improving accuracy by 15%.",
      "Performed data preprocessing, feature engineering, and hyperparameter tuning for deployment readiness.",
      "Delivered a production-ready prototype with technical documentation as part of a 4-member team."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Solutions Architecture (Forage)",
    detail: "Built and deployed a scalable Elastic Beanstalk solution, reducing cloud resource usage by 25%."
  },
  {
    title: "Deloitte Data Analytics Simulation (Forage)",
    detail: "Designed Tableau dashboards analyzing 1,000+ rows to deliver actionable insights."
  },
  {
    title: "Lemon Entrepreneur Contest",
    detail: "Top 5 finalist among 100+ teams for pitching a VR-based AI solution in special education."
  }
];
export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  link: string;
  linkedin: string;
  category: string;
}

export interface Technology {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: 'data' | 'frontend' | 'backend' | 'database';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}
export type ProjectTag = "DevOps" | "CyberSec" | "Infra Automation" | "Mini Game";

export interface Project {
  id: string;
  title: string;
  tag: ProjectTag;
  description: string;
  codeLink?: string;
  caseStudyLink?: string;
  imageUrl?: string;
  bgColorClass?: string; // For card background color
  rotationClass?: string; // For card rotation
}

export type DevSpeakRating = 1 | 2 | 3;

export interface BlogPost {
  id: string;
  title: string;
  snippet?: string;
  rating: DevSpeakRating;
  ratingType: 'brain' | 'cog';
  fullPostLink: string; // Should be a URL or path
  highlightStyle?: 'teal' | 'purple' | 'red'; // For handwritten highlight
  isStickyNote?: boolean;
  bgColorClass?: string;
  rotationClass?: string;
}

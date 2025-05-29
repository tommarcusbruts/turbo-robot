
import type { Project } from '@/types';
import { ProjectCard } from '@/components/ProjectCard';
import { TechDebrisAnimation } from '@/components/animations/TechDebrisAnimation'; // Changed import

const projectsData: Project[] = [
  {
    id: 'autonuke',
    title: 'AutoNuke',
    tag: 'DevOps',
    description: 'Tool that auto-cleans unused containers + alerts via Discord.',
    codeLink: '#',
    caseStudyLink: '#',
    imageUrl: 'https://placehold.co/48x48.png',
    bgColorClass: 'bg-teal-500/10 border-teal-500', // Using Tailwind JIT colors for example
    rotationClass: 'transform rotate-[-1deg] hover:rotate-0'
  },
  {
    id: 'hackedlinux',
    title: 'Hacked Linux in 5 hours',
    tag: 'CyberSec',
    description: 'A Red Team game sim inside a VM.',
    caseStudyLink: '#',
    imageUrl: 'https://placehold.co/48x48.png',
    bgColorClass: 'bg-red-500/10 border-red-500',
    rotationClass: 'transform rotate-[2deg] hover:rotate-0'
  },
  {
    id: 'snakereloaded',
    title: 'Snake Reloaded',
    tag: 'Mini Game',
    description: 'Terminal snake game but CI/CD powered.',
    codeLink: '#',
    imageUrl: 'https://placehold.co/48x48.png',
    bgColorClass: 'bg-purple-500/10 border-purple-500',
    rotationClass: 'transform rotate-[-2deg] hover:rotate-0'
  },
  {
    id: 'infra-templater',
    title: 'InfraTemplater',
    tag: 'Infra Automation',
    description: 'Quickly scaffold new infrastructure components with opinionated defaults.',
    codeLink: '#',
    imageUrl: 'https://placehold.co/48x48.png',
    bgColorClass: 'bg-yellow-500/10 border-yellow-500',
    rotationClass: 'transform rotate-[1deg] hover:rotate-0'
  },
];

export function ProjectsBoard() {
  return (
    <section id="projects" className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      <TechDebrisAnimation /> 
      <div className="container mx-auto px-4 md:px-6 relative z-[1]"> {/* Ensure content is above animation */}
        <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="handwritten-highlight highlight-purple">Projects Board</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={{
                ...project,
                // Assign varied rotations for "scattered" feel
                rotationClass: index % 3 === 0 ? 'transform rotate-[-2deg] hover:rotate-0' : index % 3 === 1 ? 'transform rotate-[1deg] hover:rotate-0' : 'transform rotate-[-1deg] hover:rotate-0'
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

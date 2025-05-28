import type { Project } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, BookOpen, Wrench, Shield, GitFork, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const tagIcons: Record<Project['tag'], React.ElementType> = {
  DevOps: Wrench,
  CyberSec: Shield,
  InfraAutomation: GitFork,
  MiniGame: Gamepad2,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const TagIcon = tagIcons[project.tag] || Wrench;

  return (
    <Card className={cn(
      "comic-border uneven-radius flex flex-col justify-between hover:shadow-[8px_8px_0px_hsl(var(--foreground))]",
      project.bgColorClass || 'bg-card',
      project.rotationClass
    )}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <TagIcon className="h-4 w-4" />
            {project.tag}
          </Badge>
          {project.imageUrl && (
             <img src={project.imageUrl} alt={project.title} className="w-12 h-12 rounded-sm border border-border" data-ai-hint="project logo" />
          )}
        </div>
        <CardTitle className="font-fredoka text-2xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Optional: Could add a small image or visual element here */}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 justify-start">
        {project.codeLink && (
          <Button variant="outline" className="w-full sm:w-auto comic-border border-muted-foreground hover:bg-muted" asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-4 w-4" /> View Code
            </a>
          </Button>
        )}
        {project.caseStudyLink && (
          <Button variant="default" className="w-full sm:w-auto comic-border border-primary hover:bg-primary/90" asChild>
            <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-4 w-4" /> Case Study
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

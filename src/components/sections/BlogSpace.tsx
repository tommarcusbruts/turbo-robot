import type { BlogPost } from '@/types';
import { BlogCard } from '@/components/BlogCard';
import { AiBlogSummarizer } from '@/components/AiBlogSummarizer';

const blogPostsData: BlogPost[] = [
  {
    id: 'jenkins-cron',
    title: 'Why I Deploy with Jenkins & Destroy with Cron',
    snippet: 'The art of ephemeral infrastructure and scheduled chaos.',
    rating: 3,
    ratingType: 'cog',
    fullPostLink: '#',
    highlightStyle: 'teal',
    bgColorClass: 'bg-accent/10 border-accent',
  },
  {
    id: 'linux-logs',
    title: 'Linux Logs That Betrayed Me',
    snippet: 'A deep dive into deceptive syslog entries and how they almost got me.',
    rating: 2,
    ratingType: 'brain',
    fullPostLink: '#',
    highlightStyle: 'red',
    isStickyNote: true,
    bgColorClass: 'bg-yellow-100 border-yellow-400', // Explicit sticky note style
    rotationClass: 'transform rotate-[3deg] hover:rotate-0'
  },
  {
    id: 'devsecops-trust',
    title: 'DevSecOps is Just Ops with Trust Issues',
    snippet: 'Exploring the human element in automated security pipelines.',
    rating: 3,
    ratingType: 'brain',
    fullPostLink: '#',
    highlightStyle: 'purple',
    bgColorClass: 'bg-primary/10 border-primary',
    rotationClass: 'transform rotate-[-2deg] hover:rotate-0'
  },
  {
    id: 'code-snippet-example',
    title: 'Quick Tip: Bash Aliases',
    snippet: "alias k='kubectl'\nalias kgp='kubectl get pods'",
    rating: 1,
    ratingType: 'cog',
    fullPostLink: '#',
    isStickyNote: true,
    bgColorClass: 'bg-pink-100 border-pink-400', // Another sticky note color
    rotationClass: 'transform rotate-[-1deg] hover:rotate-0'
  }
];

export function BlogSpace() {
  return (
    <section id="blog" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="handwritten-highlight highlight-accent">Blog + Research Space</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Doodles, post-its, terminal wisdom, and AI-powered summaries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 items-start">
          {blogPostsData.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={{
                ...post,
                rotationClass: post.rotationClass || (index % 3 === 0 ? 'transform rotate-[-2deg] hover:rotate-0' : index % 3 === 1 ? 'transform rotate-[1deg] hover:rotate-0' : 'transform rotate-[-1deg] hover:rotate-0')
              }}
            />
          ))}
        </div>

        <AiBlogSummarizer />
      </div>
    </section>
  );
}

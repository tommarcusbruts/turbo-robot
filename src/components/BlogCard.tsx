import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Cog, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const RatingIcon = post.ratingType === 'brain' ? Brain : Cog;

  return (
    <Card className={cn(
      "comic-border uneven-radius-alt flex flex-col justify-between hover:shadow-[7px_7px_0px_hsl(var(--foreground))]",
      post.bgColorClass || 'bg-card',
      post.rotationClass,
      post.isStickyNote ? 'bg-yellow-100 border-yellow-400 shadow-[3px_3px_0px_#FBBF24] p-4' : '' // Tailwind yellow-400
    )}>
      <CardHeader>
        <CardTitle className={cn(
          "font-fredoka text-2xl broken-underline",
          post.highlightStyle ? `handwritten-highlight highlight-${post.highlightStyle}` : ''
        )}>
          {post.title}
        </CardTitle>
        {post.isStickyNote && post.snippet && (
          <pre className="mt-2 bg-black/5 p-2 rounded text-xs font-roboto-mono overflow-x-auto">
            <code>{post.snippet}</code>
          </pre>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        {!post.isStickyNote && post.snippet && (
          <CardDescription className="font-roboto-mono text-sm">{post.snippet}</CardDescription>
        )}
        <div className="mt-4 flex items-center">
          <span className="text-sm mr-2 text-muted-foreground">Dev Speak:</span>
          <div className="flex">
            {Array.from({ length: post.rating }).map((_, i) => (
              <RatingIcon key={i} className="h-5 w-5 text-primary" />
            ))}
             {Array.from({ length: 3 - post.rating }).map((_, i) => (
              <RatingIcon key={i} className="h-5 w-5 text-muted-foreground/30" />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" asChild>
          <a href={post.fullPostLink} target="_blank" rel="noopener noreferrer">
            Read Full Post <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

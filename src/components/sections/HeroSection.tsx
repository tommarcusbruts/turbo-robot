
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Briefcase, FileText } from 'lucide-react';
import { RainingCode } from '@/components/animations/RainingCode';

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      <RainingCode />
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10"> {/* Ensure content is above animation */}
        <div className="flex flex-col items-center space-y-8">
          <div className="relative group">
            <Image
              src="https://placehold.co/200x200.png"
              alt="tommarcusbrut Avatar"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary shadow-lg comic-border group-hover:animate-bounce"
              data-ai-hint="cartoon avatar"
            />
            {/* Digital sparks/AI code energy lines - simplified with hover effect */}
            <div className="absolute inset-0 rounded-full border-2 border-accent opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
          </div>

          <div className="space-y-4">
            <h1 className="font-fredoka text-5xl md:text-7xl font-bold tracking-tighter">
              tommarcusbrut
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              // hybrid devSec automation wizard
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building infra that self-heals, blogs that hit hard, and tools that live in the terminal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="comic-border border-primary hover:bg-primary/90" asChild>
              <a href="#projects">
                <Briefcase className="mr-2 h-5 w-5" /> See Projects <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="comic-border border-accent hover:bg-accent/90" asChild>
              <a href="#blog">
                <FileText className="mr-2 h-5 w-5" /> Read Posts <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="comic-border hover:bg-muted" asChild>
              <a href="mailto:tommarcusbrut@example.com">
                 <MessageCircle className="mr-2 h-5 w-5" /> Talk to Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

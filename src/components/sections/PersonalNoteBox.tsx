import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Zap, BookOpen, Construction } from 'lucide-react'; // Zap for Learning, BookOpen for Reading, Construction for Building
import Image from 'next/image';

export function PersonalNoteBox() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <Card className="comic-border border-secondary uneven-radius-alt max-w-2xl w-full p-6 md:p-8 transform -rotate-1 hover:rotate-0 bg-card shadow-[6px_6px_0px_hsl(var(--secondary))] hover:shadow-[8px_8px_0px_hsl(var(--secondary))]"
        style={{
          // backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a06cd5' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}>
          <CardHeader className="text-center mb-4">
            {/* Optional small doodle or icon */}
             <Image src="https://placehold.co/80x80.png" alt="Sketchpad Icon" width={80} height={80} data-ai-hint="notepad sketch" className="mx-auto mb-4 rounded-full opacity-70 comic-border border-muted" />
            <CardTitle className="font-fredoka text-3xl md:text-4xl">
              A Quick Note From <span className="text-primary handwritten-highlight highlight-purple">tommarcusbrut</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-center text-foreground/90">
              I’m Tom, but online it’s <strong className="font-fredoka">tommarcusbrut</strong>.
              I don’t ship "hello world", I ship self-defending infrastructure.
              Want to build weird infra or hackathons with me? Hit me up.
            </p>
            
            <div className="border-t-2 border-dashed border-border my-6 pt-6">
              <h3 className="font-fredoka text-2xl text-center mb-4">What I'm Up To Now:</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <div>
                    <strong className="font-fredoka">Learning:</strong> K8s Security Best Practices & eBPF.
                  </div>
                </li>
                <li className="flex items-start">
                  <Construction className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <div>
                    <strong className="font-fredoka">Building:</strong> A gameified Nmap GUI with a retro terminal aesthetic.
                  </div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <div>
                    <strong className="font-fredoka">Reading:</strong> "The Phoenix Project" (again!) and "Designing Data-Intensive Applications".
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="comic-border border-primary hover:bg-primary/90" asChild>
                <a href="mailto:tommarcusbrut@example.com">
                  <MessageCircle className="mr-2 h-5 w-5" /> Let's Connect
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

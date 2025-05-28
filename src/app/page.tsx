import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsBoard } from '@/components/sections/ProjectsBoard';
import { BlogSpace } from '@/components/sections/BlogSpace';
import { PersonalNoteBox } from '@/components/sections/PersonalNoteBox';
import { FakeTerminal } from '@/components/sections/FakeTerminal';

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <div className="space-y-12 md:space-y-20 lg:space-y-28 xl:space-y-32"> {/* This div adds spacing between major sections */}
        <ProjectsBoard />
        <BlogSpace />
        <PersonalNoteBox />
      </div>
      <FakeTerminal />
      
      {/* Footer could go here */}
      <footer className="py-8 text-center text-sm text-muted-foreground bg-background border-t border-border mt-16">
        <p>&copy; {new Date().getFullYear()} tommarcusbrut. All rights reserved.</p>
        <p>Built with Next.js, TailwindCSS, and a dash of cyber magic.</p>
      </footer>
    </main>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Terminal, HelpCircle, Briefcase, FileText, Mail, Trash2, CornerDownLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HistoryItem {
  id: number;
  type: 'input' | 'output' | 'error';
  text: string | React.ReactNode;
}

const welcomeMessage = `Welcome to tommarcusbrut's CyberDeck!
Type 'help' for a list of available commands.
-------------------------------------------------`;

export function FakeTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: Date.now(), type: 'output', text: welcomeMessage },
  ]);
  const [showCursor, setShowCursor] = useState(true);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const processCommand = (command: string) => {
    let output: React.ReactNode = `Command not found: ${command}`;
    let type: HistoryItem['type'] = 'error';

    switch (command.toLowerCase()) {
      case 'help':
        type = 'output';
        output = (
          <>
            Available commands:
            <ul className="list-disc list-inside ml-4">
              <li><span className="text-accent">help</span> - Show this help message</li>
              <li><span className="text-accent">projects</span> - Scroll to Projects section</li>
              <li><span className="text-accent">blog</span> - Scroll to Blog section</li>
              <li><span className="text-accent">contact</span> - Show contact information</li>
              <li><span className="text-accent">clear</span> - Clear the terminal</li>
              <li><span className="text-accent">whoami</span> - Display user info</li>
              <li><span className="text-accent">date</span> - Display current date and time</li>
            </ul>
          </>
        );
        break;
      case 'projects':
        type = 'output';
        output = 'Scrolling to projects...';
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'blog':
        type = 'output';
        output = 'Scrolling to blog...';
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        type = 'output';
        output = (
          <>
            Contact me at: <a href="mailto:tommarcusbrut@example.com" className="text-accent underline">tommarcusbrut@example.com</a>
            <br />
            Or find me on <a href="#" className="text-accent underline">GitHub</a> / <a href="#" className="text-accent underline">LinkedIn</a>.
          </>
        );
        break;
      case 'clear':
        setHistory([{ id: Date.now(), type: 'output', text: 'Terminal cleared.' }]);
        return;
      case 'whoami':
        type = 'output';
        output = 'User: tommarcusbrut // Status: Hybrid DevSec Automation Wizard';
        break;
      case 'date':
        type = 'output';
        output = `Current Date: ${new Date().toLocaleString()}`;
        break;
    }

    setHistory(prev => [
      ...prev,
      { id: Date.now() + 1, type: 'input', text: `$ ${command}` },
      { id: Date.now() + 2, type, text: output },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    processCommand(input.trim());
    setInput('');
  };

  const getIconForType = (type: HistoryItem['type']) => {
    switch (type) {
      case 'input': return <CornerDownLeft className="h-4 w-4 text-primary inline-block mr-2 shrink-0" />;
      case 'output': return <Terminal className="h-4 w-4 text-accent inline-block mr-2 shrink-0" />;
      case 'error': return <HelpCircle className="h-4 w-4 text-destructive inline-block mr-2 shrink-0" />;
      default: return null;
    }
  }

  return (
    <section id="terminal" className="w-full py-12 md:py-16 bg-foreground/95 text-background/90 font-roboto-mono">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-black/80 border-2 border-primary/50 shadow-[5px_5px_0px_hsl(var(--primary))] text-green-400 p-4 rounded-lg comic-border" style={{ borderColor: 'hsl(var(--primary))' }}>
          <div className="h-80 overflow-y-auto mb-4 pr-2">
            {history.map(item => (
              <div key={item.id} className={cn(
                "mb-1 text-sm flex items-start",
                item.type === 'error' && 'text-red-400',
                item.type === 'input' && 'text-blue-300',
              )}>
                {getIconForType(item.type)}
                <span className="whitespace-pre-wrap break-words">{item.text}</span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-primary mr-2">$</span>
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-green-400 flex-grow p-0 h-auto text-sm"
              placeholder="Type a command..."
              spellCheck="false"
              autoComplete="off"
            />
            {showCursor && <span className="bg-primary w-2 h-4 animate-pulse inline-block ml-1"></span>}
             <Button type="submit" variant="ghost" size="sm" className="ml-2 text-primary hover:bg-primary/20 hover:text-accent p-1">
              <CornerDownLeft className="h-4 w-4" />
            </Button>
          </form>
        </Card>
         <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
          <p>Click icons or type commands. Try <code className="bg-muted/20 px-1 rounded text-accent">help</code>.</p>
          <div className="flex gap-2">
            <HelpCircle onClick={() => processCommand('help')} className="h-4 w-4 cursor-pointer hover:text-accent" title="Help"/>
            <Briefcase onClick={() => processCommand('projects')} className="h-4 w-4 cursor-pointer hover:text-accent" title="Projects"/>
            <FileText onClick={() => processCommand('blog')} className="h-4 w-4 cursor-pointer hover:text-accent" title="Blog"/>
            <Mail onClick={() => processCommand('contact')} className="h-4 w-4 cursor-pointer hover:text-accent" title="Contact"/>
            <Trash2 onClick={() => processCommand('clear')} className="h-4 w-4 cursor-pointer hover:text-destructive" title="Clear Terminal"/>
          </div>
        </div>
      </div>
    </section>
  );
}

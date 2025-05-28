'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateBlogSummary } from '@/ai/flows/blog-summarizer';
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AiBlogSummarizer() {
  const [blogContent, setBlogContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    if (!blogContent.trim()) {
      toast({
        title: "Input Missing",
        description: "Please paste some blog content to summarize.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateBlogSummary({ blogPostContent: blogContent });
      setSummary(result.summary);
      toast({
        title: "Summary Generated!",
        description: "AI has crafted a summary for your blog post.",
      });
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="comic-border border-primary uneven-radius w-full max-w-2xl mx-auto my-8 transform rotate-1 hover:rotate-0">
      <CardHeader>
        <CardTitle className="font-fredoka text-2xl flex items-center">
          <Sparkles className="h-6 w-6 mr-2 text-primary animate-pulse" />
          AI Blog Summarizer
        </CardTitle>
        <CardDescription>
          Paste your blog post content below and let AI generate a catchy summary to draw readers in!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your full blog post content here..."
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          rows={10}
          className="comic-border border-input focus:border-primary"
          disabled={isLoading}
        />
        {summary && (
          <div className="p-4 bg-primary/10 rounded-md border border-primary/30">
            <h4 className="font-fredoka text-lg mb-2 text-primary">Generated Summary:</h4>
            <p className="text-sm text-foreground/90 whitespace-pre-line">{summary}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSummarize}
          disabled={isLoading}
          className="w-full comic-border border-primary hover:bg-primary/90"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Generate Summary
        </Button>
      </CardFooter>
    </Card>
  );
}

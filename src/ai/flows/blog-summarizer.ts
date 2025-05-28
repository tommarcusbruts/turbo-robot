'use server';

/**
 * @fileOverview This file contains the Genkit flow for generating blog summaries for visitors.
 *
 * - generateBlogSummary - A function that generates a concise AI summary of a blog post.
 * - BlogSummaryInput - The input type for the generateBlogSummary function.
 * - BlogSummaryOutput - The return type for the generateBlogSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogSummaryInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The complete content of the blog post to be summarized.'),
});
export type BlogSummaryInput = z.infer<typeof BlogSummaryInputSchema>;

const BlogSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise, AI-generated summary of the blog post, suitable for display on the homepage.'
    ),
});
export type BlogSummaryOutput = z.infer<typeof BlogSummaryOutputSchema>;

export async function generateBlogSummary(input: BlogSummaryInput): Promise<BlogSummaryOutput> {
  return generateBlogSummaryFlow(input);
}

const blogSummaryPrompt = ai.definePrompt({
  name: 'blogSummaryPrompt',
  input: {schema: BlogSummaryInputSchema},
  output: {schema: BlogSummaryOutputSchema},
  prompt: `Summarize the following blog post content in a concise manner, suitable for display on a homepage to entice visitors to read the full post:\n\n{{{blogPostContent}}}`,
});

const generateBlogSummaryFlow = ai.defineFlow(
  {
    name: 'generateBlogSummaryFlow',
    inputSchema: BlogSummaryInputSchema,
    outputSchema: BlogSummaryOutputSchema,
  },
  async input => {
    const {output} = await blogSummaryPrompt(input);
    return output!;
  }
);

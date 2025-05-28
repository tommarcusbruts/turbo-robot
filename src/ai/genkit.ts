import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import { nextPlugin } from '@genkit-ai/next'; // Import nextPlugin

export const ai = genkit({
  plugins: [
    nextPlugin(), // Add nextPlugin
    googleAI()
  ],
  model: 'googleai/gemini-2.0-flash',
});

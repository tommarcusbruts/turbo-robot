import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import nextPlugin from '@genkit-ai/next'; // Changed to default import

export const ai = genkit({
  plugins: [
    nextPlugin(), // Use the default imported plugin
    googleAI()
  ],
  model: 'googleai/gemini-2.0-flash',
});

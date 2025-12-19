'use server';
/**
 * @fileOverview A flow for generating the rotating tagline for the hero section.
 *
 * - generateRotatingTagline - A function that generates the rotating tagline.
 * - RotatingTaglineOutput - The return type for the generateRotatingTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RotatingTaglineOutputSchema = z.object({
  tagline: z.enum(['Trust', 'Afford', 'Get Fast']).describe('The rotating tagline.'),
});
export type RotatingTaglineOutput = z.infer<typeof RotatingTaglineOutputSchema>;

export async function generateRotatingTagline(): Promise<RotatingTaglineOutput> {
  return rotatingTaglineFlow();
}

const prompt = ai.definePrompt({
  name: 'rotatingTaglinePrompt',
  output: {schema: RotatingTaglineOutputSchema},
  prompt: `You are a marketing expert. Return one of the following taglines: Trust, Afford, Get Fast.`,
});

const rotatingTaglineFlow = ai.defineFlow(
  {
    name: 'rotatingTaglineFlow',
    outputSchema: RotatingTaglineOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);

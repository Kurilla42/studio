'use server';

/**
 * @fileOverview Provides AI-powered assistance for the live chat widget. 
 *
 * - liveChatAssistance -  The function that orchestrates the live chat assistance flow.
 * - LiveChatAssistanceInput - The input type for the liveChatAssistance function.
 * - LiveChatAssistanceOutput - The output type for the liveChatAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LiveChatAssistanceInputSchema = z.object({
  query: z.string().describe('The user query for plumbing assistance.'),
});
export type LiveChatAssistanceInput = z.infer<typeof LiveChatAssistanceInputSchema>;

const LiveChatAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user query.'),
});
export type LiveChatAssistanceOutput = z.infer<typeof LiveChatAssistanceOutputSchema>;

export async function liveChatAssistance(input: LiveChatAssistanceInput): Promise<LiveChatAssistanceOutput> {
  return liveChatAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'liveChatPrompt',
  input: {schema: LiveChatAssistanceInputSchema},
  output: {schema: LiveChatAssistanceOutputSchema},
  prompt: `You are a helpful AI assistant providing support for a plumbing company.
  Answer user questions about plumbing issues, services offered, and scheduling appointments.
  Be concise and professional in your responses.

  User Query: {{{query}}}`,
});

const liveChatAssistanceFlow = ai.defineFlow(
  {
    name: 'liveChatAssistanceFlow',
    inputSchema: LiveChatAssistanceInputSchema,
    outputSchema: LiveChatAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

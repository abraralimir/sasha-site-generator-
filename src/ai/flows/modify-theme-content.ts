'use server';

/**
 * @fileOverview A flow for modifying website theme content based on user selections and AI suggestions.
 *
 * - modifyThemeContent - A function that accepts content and returns AI-suggested modifications.
 * - ModifyThemeContentInput - The input type for the modifyThemeContent function.
 * - ModifyThemeContentOutput - The return type for the modifyThemeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModifyThemeContentInputSchema = z.object({
  selectedContent: z
    .string()
    .describe('The content selected by the user for modification.'),
  theme: z.string().describe('The overall theme of the website.'),
  pageContext: z.string().describe('The context of the page where content is being modified.')
});

export type ModifyThemeContentInput = z.infer<typeof ModifyThemeContentInputSchema>;

const ModifyThemeContentOutputSchema = z.object({
  suggestedContent: z
    .string()
    .describe('AI-suggested alternative content for the selected text.'),
});

export type ModifyThemeContentOutput = z.infer<typeof ModifyThemeContentOutputSchema>;

export async function modifyThemeContent(input: ModifyThemeContentInput): Promise<ModifyThemeContentOutput> {
  return modifyThemeContentFlow(input);
}

const modifyThemeContentPrompt = ai.definePrompt({
  name: 'modifyThemeContentPrompt',
  input: {schema: ModifyThemeContentInputSchema},
  output: {schema: ModifyThemeContentOutputSchema},
  prompt: `You are an AI assistant specialized in suggesting content modifications for websites.

  The user has selected the following content on their website:
  """{{selectedContent}}"""

  The website has a "{{theme}}" theme, and this content is located in the "{{pageContext}}" section.

  Please provide a single alternative version of the content, keeping the theme and context in mind.
  The goal is to make the content more engaging, stylistically appropriate, and effective for the website.
  Do not suggest any new features or functionality, only re-written content.

  New Content Suggestion:
  `,
});

const modifyThemeContentFlow = ai.defineFlow(
  {
    name: 'modifyThemeContentFlow',
    inputSchema: ModifyThemeContentInputSchema,
    outputSchema: ModifyThemeContentOutputSchema,
  },
  async input => {
    const {output} = await modifyThemeContentPrompt(input);
    return output!;
  }
);

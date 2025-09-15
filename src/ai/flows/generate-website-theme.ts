'use server';

/**
 * @fileOverview AI flow for generating a Next.js website theme based on a user's description.
 *
 * - generateWebsiteTheme - A function that generates a website theme.
 * - GenerateWebsiteThemeInput - The input type for the generateWebsiteTheme function.
 * - GenerateWebsiteThemeOutput - The return type for the generateWebsiteTheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteThemeInputSchema = z.object({
  themeDescription: z
    .string()
    .describe('A description of the desired website theme.'),
});

export type GenerateWebsiteThemeInput = z.infer<
  typeof GenerateWebsiteThemeInputSchema
>;

const GenerateWebsiteThemeOutputSchema = z.object({
  themeCode: z
    .string()
    .describe('The generated Next.js code for the website theme.'),
});

export type GenerateWebsiteThemeOutput = z.infer<
  typeof GenerateWebsiteThemeOutputSchema
>;

export async function generateWebsiteTheme(
  input: GenerateWebsiteThemeInput
): Promise<GenerateWebsiteThemeOutput> {
  return generateWebsiteThemeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebsiteThemePrompt',
  input: {schema: GenerateWebsiteThemeInputSchema},
  output: {schema: GenerateWebsiteThemeOutputSchema},
  prompt: `You are an expert Next.js developer who specializes in creating website themes based on user descriptions.

You will generate the complete code for a basic Next.js website theme based on the user's description. Ensure the generated code is clean, well-structured, and deployable.

Description: {{{themeDescription}}}`,
});

const generateWebsiteThemeFlow = ai.defineFlow(
  {
    name: 'generateWebsiteThemeFlow',
    inputSchema: GenerateWebsiteThemeInputSchema,
    outputSchema: GenerateWebsiteThemeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

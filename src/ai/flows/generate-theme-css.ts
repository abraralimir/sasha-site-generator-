'use server';

/**
 * @fileOverview AI flow for generating CSS variables for a website theme.
 *
 * - generateThemeCss - A function that generates CSS variables for a theme.
 * - GenerateThemeCssInput - The input type for the generateThemeCss function.
 * - GenerateThemeCssOutput - The return type for the generateThemeCss function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThemeCssInputSchema = z.object({
  themeDescription: z
    .string()
    .describe('A description of the desired website theme.'),
});

export type GenerateThemeCssInput = z.infer<
  typeof GenerateThemeCssInputSchema
>;

const GenerateThemeCssOutputSchema = z.object({
  themeCss: z
    .string()
    .describe('The generated CSS variables for the theme, including both light and dark modes.'),
});

export type GenerateThemeCssOutput = z.infer<
  typeof GenerateThemeCssOutputSchema
>;

export async function generateThemeCss(
  input: GenerateThemeCssInput
): Promise<GenerateThemeCssOutput> {
  return generateThemeCssFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThemeCssPrompt',
  input: {schema: GenerateThemeCssInputSchema},
  output: {schema: GenerateThemeCssOutputSchema},
  prompt: `You are an expert web designer who specializes in creating beautiful color palettes and themes.
Your task is to generate CSS variables for a website theme based on a user's description.

**User's Theme Description:**
"{{{themeDescription}}}"

**Instructions:**
1.  Analyze the user's description to understand the mood, style, and color preferences.
2.  Generate a complete set of HSL-based CSS variables for BOTH a light theme (\`:root\`) and a dark theme (\`.dark\`).
3.  The colors should be harmonious and accessible.
4.  You MUST define values for all the following variables for both :root and .dark selectors:
    *   --background
    *   --foreground
    *   --card
    *   --card-foreground
    *   --popover
    *   --popover-foreground
    *   --primary
    *   --primary-foreground
    *   --secondary
    *   --secondary-foreground
    *   --muted
    *   --muted-foreground
    *   --accent
    *   --accent-foreground
    *   --destructive
    *   --destructive-foreground
    *   --border
    *   --input
    *   --ring
5.  The output MUST be only the raw CSS code. Do not wrap it in a markdown block or any other text.
6.  The format should be HSL values without the 'hsl()' wrapper. Example: \`--primary: 210 70% 50%;\`

**Example Output Structure:**
\`\`\`css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... all other light theme variables ... */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... all other dark theme variables ... */
  }
}
\`\`\`
`,
});

const generateThemeCssFlow = ai.defineFlow(
  {
    name: 'generateThemeCssFlow',
    inputSchema: GenerateThemeCssInputSchema,
    outputSchema: GenerateThemeCssOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

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
  pageContext: z.string().describe('The context of the page where content is being modified.'),
  componentContext: z.string().describe('The type of component being edited (e.g., Hero, Header).'),
  fieldDescription: z.string().describe('A description of the specific field being edited (e.g., "Main headline").')
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
  prompt: `You are an expert copywriter and AI assistant specialized in suggesting content modifications for websites. Your goal is to provide a single, high-quality alternative for the user-selected text.

**Context:**
- Website Theme: {{theme}}
- Page Section: {{pageContext}}
- Component Type: {{componentContext}}
- Field: {{fieldDescription}}

**User's Original Content:**
"""
{{selectedContent}}
"""

**Your Task:**
Based on all the provided context, rewrite the user's original content. The new version should be more engaging, clear, and stylistically aligned with the website's theme.

**IMPORTANT RULES:**
1.  **Return only the suggested text.** Do not include any surrounding explanations, quotation marks, or labels.
2.  The new content should be a direct replacement for the original. Match the approximate length and tone unless it's clearly inappropriate.
3.  Focus only on rewriting the text. Do not suggest new features, components, or functionality.

**New Content Suggestion:**`,
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

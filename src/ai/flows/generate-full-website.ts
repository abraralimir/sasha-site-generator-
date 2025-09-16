'use server';

/**
 * @fileOverview A Genkit flow for generating a complete website structure and content based on a user's description.
 *
 * - generateFullWebsite - A function that orchestrates the generation of a full website.
 * - GenerateFullWebsiteInput - The input type for the generateFullWebsite function.
 * - GenerateFullWebsiteOutput - The return type for the generateFullWebsite function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateFullWebsiteInputSchema = z.object({
  siteName: z.string().describe('The desired name for the website.'),
  description: z.string().describe('A detailed description of the website to be created.'),
});

export type GenerateFullWebsiteInput = z.infer<typeof GenerateFullWebsiteInputSchema>;

// Define specific content schemas for each component type
const HeaderContentSchema = z.object({
  brandName: z.string(),
  navItems: z.array(z.object({ label: z.string() })),
  buttonText: z.string(),
});

const HeroContentSchema = z.object({
  headline: z.string(),
  subheading: z.string(),
  button1Text: z.string(),
  button2Text: z.string(),
});

const FeatureGridContentSchema = z.object({
  headline: z.string(),
  subheading: z.string(),
  features: z.array(z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
  })),
});

const CallToActionContentSchema = z.object({
  headline: z.string(),
  subheading: z.string(),
  buttonText: z.string(),
});

const FooterContentSchema = z.object({
  brandName: z.string(),
  copyright: z.string(),
});

const ComponentSchema = z.object({
  id: z.string(),
  type: z.enum(['Header', 'Hero', 'FeatureGrid', 'CallToAction', 'Footer', 'Article']),
  content: z.record(z.any()),
});

const PageSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  components: z.array(ComponentSchema),
});

const GenerateFullWebsiteOutputSchema = z.object({
  pages: z.array(PageSchema),
});

export type GenerateFullWebsiteOutput = z.infer<typeof GenerateFullWebsiteOutputSchema>;

export async function generateFullWebsite(
  input: GenerateFullWebsiteInput
): Promise<GenerateFullWebsiteOutput> {
  return generateFullWebsiteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFullWebsitePrompt',
  input: { schema: GenerateFullWebsiteInputSchema },
  output: { schema: GenerateFullWebsiteOutputSchema },
  prompt: `
You are an expert website designer and content creator. Your task is to generate the entire structure and content for a website based on a user's description.

**User Request:**
- Site Name: {{{siteName}}}
- Description: {{{description}}}

**Your Task:**
Generate a JSON object representing the website structure. The website should have a "Home" page by default, and you can add other relevant pages (like "About", "Services", "Contact") based on the user's description.

**Output Format:**
You must return a valid JSON object matching the following Zod schema:
\`\`\`json
{
  pages: [
    {
      id: string, // e.g., "page-home"
      name: string, // e.g., "Home"
      slug: string, // e.g., "/"
      components: [
        {
          id: string, // e.g., "comp-header-1"
          type: 'Header' | 'Hero' | 'FeatureGrid' | 'CallToAction' | 'Footer',
          content: { ... } // An object with content fields specific to the component type.
        }
      ]
    }
  ]
}
\`\`\`

**Component Content Schemas:**
- **Header:** \`{ brandName: string, navItems: [{ label: string }], buttonText: string }\`
- **Hero:** \`{ headline: string, subheading: string, button1Text: string, button2Text: string }\`
- **FeatureGrid:** \`{ headline: string, subheading: string, features: [{ id: string, title: string, description: string }] }\`
  - For feature IDs, use "feature-1", "feature-2", "feature-3".
- **CallToAction:** \`{ headline: string, subheading: string, buttonText: string }\`
- **Footer:** \`{ brandName: string, copyright: string }\`
- **Article:** \`{ title: string, article: string }\`

**Instructions:**
1.  **Analyze the user's description** to understand the purpose and audience of the website.
2.  **Create a logical page structure.** A simple marketing site might have Home, About, and Contact pages. A portfolio might have Home and a Gallery page.
3.  **Select appropriate components** for each page. Every page should have a Header and a Footer.
4.  **Generate all content** for each component. The content should be high-quality, engaging, and tailored to the website's theme.
5.  **Use unique IDs** for each page and component (e.g., \`page-home\`, \`comp-hero-12345\`).
6.  **Set the site name** provided by the user in the Header and Footer components.
7.  **Generate a copyright notice** for the footer that includes the current year and the site name.
8.  Ensure the final output is a single, valid JSON object that strictly adheres to the schema provided. Do not include any extra text or explanations outside the JSON object.
`,
});

const generateFullWebsiteFlow = ai.defineFlow(
  {
    name: 'generateFullWebsiteFlow',
    inputSchema: GenerateFullWebsiteInputSchema,
    outputSchema: GenerateFullWebsiteOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    
    // Ensure IDs are unique, as the model might repeat them
    let pageIdCounter = 0;
    let componentIdCounter = 0;

    output!.pages.forEach(page => {
      page.id = `page-${Date.now()}-${pageIdCounter++}`;
      page.slug = `/${page.name.toLowerCase().replace(/\s+/g, '-')}`;
      page.components.forEach(component => {
        component.id = `comp-${Date.now()}-${componentIdCounter++}`;
      });
    });

    return output!;
  }
);

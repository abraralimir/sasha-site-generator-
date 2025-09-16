'use server';

/**
 * @fileOverview A Genkit flow for generating a blog post page from a topic.
 *
 * - generateBlogPost - A function that generates a blog post page.
 * - GenerateBlogPostInput - The input type for the generateBlogPost function.
 * - GenerateBlogPostOutput - The return type for the generateBlogPost function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { WebsitePage } from '@/lib/types';
import { initialSiteData } from '@/lib/initial-site-data';

const GenerateBlogPostInputSchema = z.object({
  topic: z.string().describe('The topic for the blog post.'),
});

export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const BlogPostContentSchema = z.object({
    title: z.string().describe('A catchy and SEO-friendly title for the blog post.'),
    article: z.string().describe('The full content of the blog post, formatted in Markdown.'),
});

const GenerateBlogPostOutputSchema = z.object({
    page: z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
        components: z.array(z.object({
            id: z.string(),
            type: z.enum(['Header', 'Article', 'Footer']),
            content: z.record(z.any()),
        })),
    })
});

export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;


export async function generateBlogPost(
  input: GenerateBlogPostInput
): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}

const blogPrompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: { schema: GenerateBlogPostInputSchema },
  output: { schema: BlogPostContentSchema },
  prompt: `
    You are an expert content creator and blogger. Your task is to write a high-quality blog post based on a given topic.

    **Topic:**
    "{{{topic}}}"

    **Your Task:**
    1.  Create a catchy, engaging, and SEO-friendly title for the blog post.
    2.  Write a comprehensive and well-structured article on the topic.
    3.  The article should be formatted in Markdown. Use headings, lists, bold text, and other elements to make it readable and engaging.
    4.  Ensure the content is original, informative, and provides value to the reader.
    5.  Return the title and the full Markdown content of the article in the specified JSON format.
  `,
});


const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async (input) => {
    const { output } = await blogPrompt(input);
    const title = output!.title;
    const article = output!.article;
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const pageId = `page-${Date.now()}`;
    const headerId = `comp-header-${Date.now()}`;
    const articleId = `comp-article-${Date.now()}`;
    const footerId = `comp-footer-${Date.now()}`;

    const newPage: WebsitePage = {
        id: pageId,
        name: title,
        slug: `/${slug}`,
        components: [
            {
                id: headerId,
                type: 'Header',
                content: { ...initialSiteData.defaultComponentContent.Header, brandName: "My Awesome Blog" },
            },
            {
                id: articleId,
                type: 'Article',
                content: { title, article },
            },
            {
                id: footerId,
                type: 'Footer',
                content: { ...initialSiteData.defaultComponentContent.Footer, brandName: "My Awesome Blog"},
            },
        ]
    };

    return { page: newPage as any };
  }
);

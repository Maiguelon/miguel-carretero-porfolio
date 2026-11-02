import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    published: z.boolean().default(false),
    order: z.number(),
    number: z.string(),
    status: z.enum(['In use', 'Functional MVP', 'Connected MVP', 'In development', 'Pilot']),
    category: z.string(),
    role: z.string(),
    context: z.string(),
    stack: z.array(z.string()),
    cover: z.string(),
    coverWidth: z.number().int().positive(),
    coverHeight: z.number().int().positive(),
    coverAlt: z.string(),
    coverCaption: z.string(),
    theme: z.enum(['olive', 'clay', 'slate']),
    repository: z.url().optional(),
    demo: z.url().optional(),
    demoLabel: z.string().optional(),
    demoRequiresLogin: z.boolean().default(false),
    walkthrough: z.url().optional(),
    brief: z.object({ problem: z.string(), contribution: z.string(), outcome: z.string() }),
  }),
});

export const collections = { projects };

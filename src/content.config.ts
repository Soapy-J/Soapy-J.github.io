import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    location: z.string().optional(),
    country: z.string().optional(),
    latitude: z.preprocess((value) => value === '' || value === null ? undefined : value, z.coerce.number().min(-90).max(90).optional()),
    longitude: z.preprocess((value) => value === '' || value === null ? undefined : value, z.coerce.number().min(-180).max(180).optional()),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };

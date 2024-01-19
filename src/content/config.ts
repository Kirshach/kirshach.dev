import { z, defineCollection } from "astro:content";

const blogPostsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    draft: z.boolean().optional(),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = { "blog-posts": blogPostsCollection };

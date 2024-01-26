import { z, defineCollection } from "astro:content";

const blogPostsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      draft: z.boolean().optional(),
      hero: z.object({
        image: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

export const collections = { "blog-posts": blogPostsCollection };

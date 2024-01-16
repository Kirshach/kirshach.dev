import { getCollection } from "astro:content";

export const getTags = (posts: Awaited<ReturnType<typeof getCollection>>) =>
  [...new Set(posts.flatMap((post) => post.data.tags))].sort();

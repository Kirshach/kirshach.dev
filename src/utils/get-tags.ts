import type { AstroGlobal } from "astro";

export const getTags = (posts: Awaited<ReturnType<AstroGlobal["glob"]>>) =>
  [...new Set(posts.flatMap((post) => post.frontmatter.tags))].sort();

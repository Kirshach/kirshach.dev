import type { CollectionEntry } from "astro:content";

export const filterDraft = ({ data }: CollectionEntry<"blog-posts">) => {
  return import.meta.env.PROD ? data.draft !== true : true;
};

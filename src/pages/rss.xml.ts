import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { filterDraft } from "../utils/filter-draft";

export async function GET(context: APIContext) {
  const blogPosts = await getCollection("blog-posts", filterDraft);

  return rss({
    title: "Dmitrii Kirshanov's Blog",
    description: "Talking AR/VR, WebXR, and more",
    site: context.site!,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

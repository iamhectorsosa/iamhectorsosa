import { getPosts } from "@lib/mdx";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const blogSiteMap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://hectorsosa.me/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated),
  }));

  return [
    {
      url: "https://hectorsosa.me",
      lastModified: new Date(),
    },
    {
      url: "https://hectorsosa.me/blog",
      lastModified: new Date(),
    },
    ...blogSiteMap,
  ];
}

import { BlogItem } from "@components/BlogItem";
import { baseMetadata } from "@config/meta";
import { compileMarkdown, getPosts } from "@lib/mdx";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = baseMetadata;

export default async function Home() {
  const posts = await getPosts();
  const { content: bio } = await compileMarkdown(`
  Msc. Project Management and UI Engineer based in Prague Czech Republic but [Made in Honduras](https://youtu.be/KPH9Al69680). Currently working as a Senior React/TypeScript Developer at [Webscope](https://webscope.io)
  `);

  return (
    <div className="space-y-12">
      <section className="space-y-3">{bio}</section>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-800">
          Latest blog posts
        </h3>
        <div className="space-y-6">
          {posts.slice(0, 3).map(({ id, date, title, description, slug }) => (
            <BlogItem
              key={id}
              slug={slug}
              date={date}
              title={title}
              description={description}
            />
          ))}
        </div>
        <Link
          className="flex items-center gap-1 text-neutral-700 hover:text-neutral-900"
          href="/blog"
        >
          <p>Go to all blog posts</p>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

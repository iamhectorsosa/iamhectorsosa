import { BlogItem } from "@components/BlogItem";
import { baseMetadata } from "@config/meta";
import { getPosts } from "@lib/mdx";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog",
  description: "From the blog",
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-800">
          Blog posts
        </h3>
        <div className="space-y-6">
          {posts.map(({ id, date, title, description, slug }) => (
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
          href="/"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <p>Go back home</p>
        </Link>
      </section>
    </>
  );
}

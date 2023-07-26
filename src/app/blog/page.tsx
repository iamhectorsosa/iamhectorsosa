import { BlogItem } from "@components/BlogItem";
import { NavigationLink } from "@components/NavigationLink";
import { baseMetadata } from "@config/meta";
import { getPosts } from "@lib/mdx";
import { Metadata } from "next";

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
        <h3 className="text-2xl font-semibold tracking-tight">Blog posts</h3>
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
        <NavigationLink label="Go back home" href="/" backNavigation />
      </section>
    </>
  );
}

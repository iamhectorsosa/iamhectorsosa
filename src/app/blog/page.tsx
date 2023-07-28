import { Item } from "@components/Item";
import { NavigationLink } from "@components/NavigationLink";
import { ProseH2 } from "@components/ui/Typography";
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
        <ProseH2>Blog posts</ProseH2>
        {posts.map(({ id, date, title, description, slug }) => (
          <Item
            key={id}
            href={`blog/${slug}`}
            date={date}
            title={title}
            description={description}
          />
        ))}
        <NavigationLink label="Go back home" href="/" backNavigation />
      </section>
    </>
  );
}

import { BlogItem } from "@components/BlogItem";
import { NavigationLink } from "@components/NavigationLink";
import { baseMetadata } from "@config/meta";
import { compileMarkdown, getPosts } from "@lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = baseMetadata;

export default async function Home() {
  const posts = await getPosts();
  const { content: bio } = await compileMarkdown(`
  Msc. Project Management and UI Engineer based in Prague Czech Republic but made in [Honduras](https://youtu.be/UbGs5shZyxc). Currently working as a Senior React/TypeScript Developer at [Webscope](https://webscope.io)
  `);

  return (
    <div className="space-y-12">
      <section className="space-y-3">{bio}</section>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight">
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
        <NavigationLink label="Go to all blog posts" href="/blog" />
      </section>
    </div>
  );
}

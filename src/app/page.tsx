import { Contributions } from "@components/Contributions";
import { Item } from "@components/Item";
import { NavigationLink } from "@components/NavigationLink";
import { TechStack } from "@components/TechStack";
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
      <section className="space-y-3">
        <h3 className="text-2xl font-semibold tracking-tight">About</h3>
        {bio}
      </section>
      <section className="space-y-6">
        <Contributions />
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight">
          Technology Stack
        </h3>
        <div className="space-y-6">
          <TechStack />
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight">Talks</h3>
        <div className="space-y-6">
          {talks
            .slice(0, 3)
            .map(({ date, title, description, href, location }, id) => (
              <Item
                key={id}
                href={href}
                date={date}
                title={title}
                description={description}
                location={location}
                prefetch={false}
              />
            ))}
        </div>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight">
          Latest blog posts
        </h3>
        <div className="space-y-6">
          {posts.slice(0, 3).map(({ id, date, title, description, slug }) => (
            <Item
              key={id}
              href={`blog/${slug}`}
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

const talks = [
  {
    href: "https://github.com/iamhectorsosa/suspense-demo",
    date: "2023-12-14T00:00:00Z",
    title: "Understanding Suspense with Next 13",
    location: "Webscope Brno",
    description:
      'How Suspense made "UI Loading state" a first class declarative concept in the React programming model.',
  },
  {
    href: "https://www.figma.com/file/4kk6YfgSq6ak691XSEhXe6/REST-API",
    date: "2022-06-24T00:00:00Z",
    title: "REST API Fundamentals Workshop",
    location: "GuideVision Prague",
    description:
      "Introduction to APIs, designing API integrations and building a SN Slack Bot.",
  },
];

import Image from "next/image";
import { getPost, getPosts } from "@lib/mdx";
import dayjs from "dayjs";
import { Metadata } from "next";
import { baseMetadata } from "@config/meta";

export async function generateMetadata({
  params: { slug },
}: BlogPostProps): Promise<Metadata> {
  const { frontmatter } = await getPost(slug);
  return {
    ...baseMetadata,
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const { content, frontmatter } = await getPost(slug);

  return (
    <>
      <header className="space-y-2">
        <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
          <time dateTime={frontmatter.date}>
            {dayjs(frontmatter.date).format("dddd D MMMM YY")}
          </time>
          <span>·</span>
          <div className="space-x-1">
            <span>by</span>
            <a
              target="_blank"
              href={`https://github.com/${frontmatter.github}`}
            >
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold text-transparent">
                {frontmatter.github}
              </span>
            </a>
          </div>
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">
          {frontmatter.title}
        </h1>
        <p className="leading-7 text-muted-foreground pt-2">
          {frontmatter.description}
        </p>
      </header>
      <article className="space-y-6 my-12 [&>h2]:!mt-12 [&>h3]:!mt-12 [&>h4]:!mt-12 [&>h2]:max-w-x">
        {content}
      </article>
      <footer className="flex items-center gap-x-3">
        <Image
          width={50}
          height={50}
          alt={frontmatter.github}
          src={
            frontmatter?.github
              ? `http://avatars.githubusercontent.com/${frontmatter.github}`
              : "https://github.com/identicons/iamhectorsosa.png"
          }
          className="overflow-hidden rounded-full"
        />
        <div className="grid gap-1 text-muted-foreground">
          <div className="space-x-1">
            <span>Written by</span>
            <a
              target="_blank"
              href={`https://github.com/${frontmatter.github}`}
            >
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-semibold text-transparent">
                {frontmatter.github}
              </span>
            </a>
          </div>
          <div className="space-x-1">
            <span>Last updated:</span>
            <time dateTime={frontmatter.lastUpdated}>
              {dayjs(frontmatter.lastUpdated).format("dddd D MMMM YY HH:mm A")}
            </time>
          </div>
        </div>
      </footer>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({ slug }));
}

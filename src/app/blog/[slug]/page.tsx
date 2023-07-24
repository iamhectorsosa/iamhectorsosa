import Image from "next/image";
import { getPost, getPosts } from "@lib/mdx";
import dayjs from "dayjs";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const { content, frontmatter } = await getPost(slug);

  console.log(frontmatter);

  return (
    <>
      <header className="space-y-2">
        <div className="flex items-center gap-x-2 text-sm text-neutral-500">
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
        <h1 className="text-5xl font-semibold tracking-tight group-hover:text-neutral-600">
          {frontmatter.title}
        </h1>
        <p className="leading-7 line-clamp-2 text-neutral-600 pt-2">
          {frontmatter.description}
        </p>
      </header>
      <article className="space-y-6 my-9 [&>h2]:!mt-12 [&>h2]:max-w-xl">
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
              : "https://github.com/identicons/webscopeio.png"
          }
          className="overflow-hidden rounded-full"
        />
        <div className="grid gap-1 text-neutral-500">
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

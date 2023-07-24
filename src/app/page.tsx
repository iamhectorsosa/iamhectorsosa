import { getPosts } from "@lib/mdx";
import dayjs from "dayjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <p className="leading-8 text-neutral-600">
          Msc. Project Management and UI Engineer based in Prague Czech Republic
          but{" "}
          <a
            className="underline underline-offset-4"
            href="https://youtu.be/KPH9Al69680"
          >
            Made in Honduras
          </a>
          . Currently working as a Senior React TypeScript Developer at{" "}
          <a
            className="underline underline-offset-4"
            href="https://webscope.io"
          >
            Webscope
          </a>
          .
        </p>
      </section>
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-800">
          Latest blog posts
        </h3>
        <div className="space-y-6">
          {posts.slice(0, 3).map(({ id, date, title, description, slug }) => (
            <Link className="block group" href={`blog/${slug}`} key={id}>
              <header className="space-y-2">
                <time className="text-sm text-neutral-500" dateTime={date}>
                  {dayjs(date).format("dddd D MMMM YY")}
                </time>
                <h1 className="text-xl font-semibold tracking-tight group-hover:text-neutral-600">
                  {title}
                </h1>
                <p className="leading-7 line-clamp-2 text-neutral-600">
                  {description}
                </p>
              </header>
            </Link>
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

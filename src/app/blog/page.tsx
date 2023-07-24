import { getPosts } from "@lib/mdx";
import dayjs from "dayjs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

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
          href="/"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <p>Go back home</p>
        </Link>
      </section>
    </>
  );
}

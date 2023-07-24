import dayjs from "dayjs";
import Link from "next/link";

export const BlogItem = ({
  slug,
  date,
  title,
  description,
}: {
  slug: string;
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <Link className="block group" href={`blog/${slug}`}>
      <header className="space-y-2">
        <time className="text-sm text-neutral-500" dateTime={date}>
          {dayjs(date).format("dddd D MMMM YY")}
        </time>
        <h1 className="text-xl font-semibold tracking-tight group-hover:text-neutral-600">
          {title}
        </h1>
        <p className="leading-7 line-clamp-2 text-neutral-700">{description}</p>
      </header>
    </Link>
  );
};

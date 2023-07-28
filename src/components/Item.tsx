import dayjs from "dayjs";
import Link from "next/link";

export const Item = ({
  date,
  href,
  title,
  description,
  location,
  prefetch = true,
}: {
  date: string;
  href: string;
  title: string;
  description: string;
  location?: string;
  prefetch?: boolean;
}) => {
  return (
    <Link className="block group" href={href} prefetch={prefetch}>
      <header className="space-y-2">
        <div className="flex gap-1 text-sm text-muted-foreground">
          <time dateTime={date}>{dayjs(date).format("ddd D MMMM YY")}</time>
          {location && (
            <>
              <span>@</span>
              {location}
            </>
          )}
        </div>
        <h1 className="text-xl font-semibold tracking-tight group-hover:text-foreground/60">
          {title}
        </h1>
        <p className="leading-7 line-clamp-2">{description}</p>
      </header>
    </Link>
  );
};

import dayjs from "dayjs";
import Link from "next/link";
import { ProseH4, ProseP } from "./ui/Typography";

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
    <Link className="block group space-y-2" href={href} prefetch={prefetch}>
      <div className="flex gap-1 text-sm text-muted-foreground">
        <time dateTime={date}>{dayjs(date).format("ddd D MMMM YY")}</time>
        {location && (
          <>
            <span>@</span>
            {location}
          </>
        )}
      </div>
      <ProseH4 className="group-hover:text-foreground/60">{title}</ProseH4>
      <ProseP className="line-clamp-2">{description}</ProseP>
    </Link>
  );
};

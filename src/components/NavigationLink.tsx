import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const NavigationLink = ({
  label,
  href,
  backNavigation = false,
}: {
  label: string;
  href: string;
  backNavigation?: boolean;
}) => {
  return (
    <Link
      className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
      href={href}
    >
      {backNavigation ? (
        <>
          <ArrowLeftIcon className="w-4 h-4" />
          <p>{label}</p>
        </>
      ) : (
        <>
          <p>{label}</p>
          <ArrowRightIcon className="w-4 h-4" />
        </>
      )}
    </Link>
  );
};

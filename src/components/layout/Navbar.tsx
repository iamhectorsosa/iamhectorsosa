"use client";
import { ThemeToggle } from "@components/ThemeToggle";
import { cn } from "@utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const basePath = pathname.match(/^\/[^/]+/)?.at(0) ?? "/";
  return (
    <div className="border-b border-border flex items-center justify-center">
      <nav className="w-full max-w-6xl pt-24 pb-4 space-y-2">
        <Link href="/">
          <h1 className="font-semibold text-2xl tracking-tight">Hector Sosa</h1>
        </Link>
        <div className="flex justify-between items-end relative">
          <ul className="flex items-center gap-x-4 mt-1">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                className={cn(
                  "text-muted-foreground hover:underline underline-offset-8 hover:text-foreground",
                  basePath === href && "text-foreground"
                )}
                href={href}
              >
                <li>{label}</li>
              </Link>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

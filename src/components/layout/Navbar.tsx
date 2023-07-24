"use client";
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
    <div className="border-b border-neutral-200 flex items-center justify-center">
      <nav className="w-full max-w-6xl pt-24 pb-4 space-y-2">
        <Link href="/">
          <h1 className="font-semibold text-2xl tracking-tight">Hector Sosa</h1>
        </Link>
        <ul className="flex items-center gap-x-4 mt-1">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              className={cn(
                "text-neutral-500 hover:underline underline-offset-8 hover:text-neutral-900",
                basePath === href && "text-neutral-900"
              )}
              href={href}
            >
              <li>{label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

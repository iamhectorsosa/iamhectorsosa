"use client";
import { ThemeToggle } from "@components/ThemeToggle";
import { ContextMenu } from "@components/ContextMenu";
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
    <div className="border-b border-border  flex items-center justify-center relative">
      <div
        style={{
          position: "absolute",
          width: "50vw",
          height: "min(50%, 600px)",
          top: "10%",
          left: "50%",
          opacity: "0.5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <nav className="w-full max-w-6xl pt-24 pb-4 space-y-2">
        <Link href="/">
          <h1 className="font-semibold text-2xl tracking-tight">Hector Sosa</h1>
        </Link>
        <div className="flex justify-between items-end">
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
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ContextMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

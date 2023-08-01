"use client";

import { ExternalLinkIcon, MoreVerticalIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@utils/cn";
import { ProseH4 } from "./ui/Typography";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { Navbar } from "./layout/Navbar";

const homeNavItems = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contributions",
    label: "Contributions",
  },
  {
    href: "#tech-stack",
    label: "Technology stack",
  },
  {
    href: "#talks",
    label: "Talks",
  },
  {
    href: "#latest-blog-posts",
    label: "Latest blog posts",
  },
];

const blogNavItems = [
  {
    href: "/blog#blog-posts",
    label: "Blog posts",
  },
];

const footerItems = [
  {
    href: "/github",
    label: "Github",
  },
  {
    href: "/twitter",
    label: "Twitter",
  },
  {
    href: "/email",
    label: "Email",
  },
];

export const ContextMenu = () => {
  const pathname = usePathname();
  const basePath = pathname.match(/^\/[^/]+/)?.at(0) ?? "/";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          id="menu-toggle"
          aria-controls="menu-toggle"
          className="rounded inline-flex h-6 w-6 justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
        >
          <MoreVerticalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-data-[state=open]:-rotate-90 group-data-[state=open]:scale-0" />
          <XIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
          <span className="sr-only">Menu Toggle</span>
        </button>
      </SheetTrigger>
      <SheetContent>
        <Navbar
          contextMenu={
            <SheetTrigger asChild>
              <button
                id="menu-toggle"
                aria-controls="menu-toggle"
                className="rounded inline-flex h-6 w-6 justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
              >
                <MoreVerticalIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-data-[state=open]:-rotate-90 group-data-[state=open]:scale-0" />
                <XIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
                <span className="sr-only">Menu Toggle</span>
              </button>
            </SheetTrigger>
          }
        />
        <div>
          <ProseH4 className="text-base">On this page</ProseH4>
          <ul className="divide-y divide-border grid py-2">
            {(basePath === "/" ? homeNavItems : blogNavItems).map(
              ({ href, label }) => (
                <SheetTrigger key={href} asChild>
                  <a href={href}>
                    <li
                      className={cn(
                        "py-4 text-muted-foreground text-xl hover:text-foreground hover:bg-muted",
                        basePath === href && "text-foreground"
                      )}
                    >
                      {label}
                    </li>
                  </a>
                </SheetTrigger>
              )
            )}
          </ul>
        </div>
        <div>
          <ProseH4 className="text-base">Contact</ProseH4>
          <ul className="divide-y divide-border grid py-2">
            {footerItems.map(({ href, label }) => (
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                key={href}
                className={cn(
                  "py-4 text-muted-foreground text-xl hover:text-foreground hover:bg-focus flex gap-x-2 items-center",
                  basePath === href && "text-foreground"
                )}
                href={href}
              >
                <li>{label}</li>
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

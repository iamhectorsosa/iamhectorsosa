"use client";

import { cn } from "@utils/cn";
import { ExternalLinkIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Navbar } from "./layout/Navbar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { ProseH4 } from "./ui/Typography";

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

const footerItems = [
  {
    href: "/linkedin",
    label: "LinkedIn",
  },
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

  const trigger = (
    <button
      id="menu-toggle"
      aria-controls="menu-toggle"
      className="rounded inline-flex h-6 w-6 justify-center items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
    >
      <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-data-[state=open]:-rotate-90 group-data-[state=open]:scale-0" />
      <XIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
      <span className="sr-only">Menu Toggle</span>
    </button>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <Navbar contextMenu={<SheetTrigger asChild>{trigger}</SheetTrigger>} />
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <ProseH4 className="text-base">Navigation</ProseH4>
            <ul className="divide-y divide-border grid">
              {navItems.map(({ href, label }) => (
                <SheetTrigger key={href} asChild>
                  <Link href={href}>
                    <li
                      className={cn(
                        "py-4 text-muted-foreground text-xl hover:text-foreground hover:bg-muted",
                        basePath === href && "text-foreground"
                      )}
                    >
                      {label}
                    </li>
                  </Link>
                </SheetTrigger>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <ProseH4 className="text-base">Contact</ProseH4>
            <ul className="divide-y divide-border grid">
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

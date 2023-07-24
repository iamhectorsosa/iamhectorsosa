import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

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

export const Footer = () => {
  return (
    <div className="border-t border-neutral-200 flex items-center justify-center">
      <nav className="w-full max-w-6xl pb-12 pt-8 flex flex-col md:flex-row justify-between">
        <Link href="/">
          <h1 className="flex items-center font-semibold text-xl tracking-tight gap-2">
            Hector Sosa
          </h1>
        </Link>
        <ul className="flex md:items-center flex-col md:flex-row gap-x-4 gap-y-2 mt-1">
          {footerItems.map(({ href, label }) => (
            <a
              key={href}
              className="text-neutral-700 hover:text-neutral-900 flex gap-x-2 items-center"
              href="/github"
            >
              <li>{label}</li>
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
};

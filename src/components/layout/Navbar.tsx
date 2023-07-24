import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 flex items-center justify-center">
      <nav className="w-full max-w-6xl pt-24 pb-4 space-y-2">
        <Link href="/">
          <h1 className="font-semibold text-2xl tracking-tight">Hector Sosa</h1>
        </Link>
        <ul className="flex items-center gap-x-4 mt-1">
          <Link className="text-neutral-700 hover:text-neutral-900" href="/">
            <li>Home</li>
          </Link>
          <Link
            className="text-neutral-700 hover:text-neutral-900"
            href="/blog"
          >
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

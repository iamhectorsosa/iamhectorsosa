"use client";

import * as React from "react";
import { ThemeToggle } from "@components/ThemeToggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="relative z-50 h-24 w-full">
        <div
          style={{
            position: "absolute",
            width: "50vw",
            height: "min(80%, 600px)",
            top: "20%",
            left: "50%",
            opacity: "0.5",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <nav className="w-full py-4 flex items-end justify-between border-b border-border bg-background z-50">
        <Link href="/">
          <h1 className="font-semibold text-2xl tracking-tight">Hector Sosa</h1>
        </Link>
        <ThemeToggle />
      </nav>
    </>
  );
};

import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://hectorsosa.me"),
  title: "Hector Sosa",
  description:
    "Full Stack Engineer with 5+ years specializing in React, TypeScript, and Go.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Hector Sosa",
    description:
      "Full Stack Engineer with 5+ years specializing in React, TypeScript, and Go.",
    url: "https://opengraphui.vercel.app",
    siteName: "Hector Sosa",
    locale: "en-US",
    type: "website",
  },
};

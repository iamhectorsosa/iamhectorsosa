import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://hectorsosa.me"),
  title: "Hector Sosa",
  description: "UI Engineer based in Prague",
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
    description: "UI Engineer based in Prague",
    url: "https://opengraphui.vercel.app",
    siteName: "Hector Sosa",
    locale: "en-US",
    type: "website",
  },
};

import { Navbar } from "@components/layout/Navbar";
import "./globals.css";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@components/layout/Footer";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Hector Sosa",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.variable} ${mono.variable} font-sans bg-neutral-50 text-neutral-900 max-w-3xl mx-auto px-4`}
      >
        <Navbar />
        <main className="py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

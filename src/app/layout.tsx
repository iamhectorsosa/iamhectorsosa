import { Footer } from "@components/layout/Footer";
import { Navbar } from "@components/layout/Navbar";
import { ThemeProvider } from "@components/providers/ThemeProvider";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";

import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${grotesk.variable} ${mono.variable} font-sans bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-3xl mx-auto px-4">
            <Navbar />
            <div className="py-12">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

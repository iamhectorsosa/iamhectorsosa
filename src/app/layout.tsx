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
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "min(50%, 600px)",
            top: "-35%",
            left: "50%",
            opacity: "0.5",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <Navbar />
        <main className="py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

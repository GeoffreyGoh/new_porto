import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

// Body font — clean & highly readable for recruiters
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display font — retro terminal look for headings & window titles
const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geoffreygohtama.dev"),
  title: "Geoffrey Gohtama — CS Student & Developer",
  description:
    "Portfolio of Geoffrey Gohtama, a Computer Science student at BINUS University (Global Class) on exchange at Yuan Ze University. Building projects in AI, web, and software development.",
  openGraph: {
    title: "Geoffrey Gohtama — CS Student & Developer",
    description:
      "CS student at BINUS University (Global Class). Java · Python · Web · Databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        {children}
      </body>
    </html>
  );
}

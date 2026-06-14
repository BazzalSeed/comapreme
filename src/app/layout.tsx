import type { Metadata } from "next";
import { Cinzel, Fredoka } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const body = Fredoka({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPTION =
  "Pick your birth year, discover your Chinese zodiac sign, meet the legends who share it — and see if you're compatible with your friends.";

export const metadata: Metadata = {
  metadataBase: new URL("https://compareme.club"),
  title: "compareme — your Chinese zodiac",
  description: DESCRIPTION,
  openGraph: {
    title: "compareme — your Chinese zodiac",
    description: DESCRIPTION,
    url: "https://compareme.club",
    siteName: "compareme",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "compareme — your Chinese zodiac",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

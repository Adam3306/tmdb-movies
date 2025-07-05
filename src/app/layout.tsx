import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMDB Movies | Discover Popular and Top Rated Films",
  description:
    "Browse the most popular movies, search the TMDB catalog, and view detailed information about your favorite films. Powered by The Movie Database (TMDB) API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <Providers>
          <div
            className={`${geistSans.variable} ${geistMono.variable} font-sans`}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

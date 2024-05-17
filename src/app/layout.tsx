import type { Metadata } from "next";
import { inter } from '@/fonts';
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "VOID",
  description: "Portal to the void",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add link to Google Fonts for Newsreader */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" />
      </head>
      <body className={clsx(inter.variable, 'font-newsreader', 'mx-auto')}>
        {children}
      </body>
    </html>
  );
}

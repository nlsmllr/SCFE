import type { Metadata } from "next";
import { inter, newsreader } from '@/fonts';
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
        <body className={clsx(inter.variable, newsreader.variable, 'mx-auto')}>
          {children}
        </body>
      </html>
  );
}

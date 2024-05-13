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
        <body className={clsx(inter.variable, 'mx-auto')}>
          {children}
        </body>
      </html>
  );
}

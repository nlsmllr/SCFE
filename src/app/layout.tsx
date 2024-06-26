import type { Metadata } from "next";
import { inter, roboto } from '@/fonts';
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "SMART CITIES",
  description: "Portal to the city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={clsx(inter.variable, 'mx-auto')}>
        {children}
      </body>
    </html>
  );
}

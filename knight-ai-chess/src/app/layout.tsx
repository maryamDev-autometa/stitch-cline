import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knight AI - Chess Application",
  description: "Play chess against AI opponents with Knight AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}

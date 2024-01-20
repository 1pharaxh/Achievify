import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "gantt-task-react/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AchieviFy",
  description: "An app to help track your progress on your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

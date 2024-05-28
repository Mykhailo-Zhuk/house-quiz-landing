import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const gotham = localFont({
  src: [
    { path: "./fonts/Gotham Pro-normal-400-100.otf", weight: "400", style: "normal" },
    { path: "./fonts/Gotham Pro-normal-700-100.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gotham.variable} font-gotham`}>{children}</body>
    </html>
  );
}
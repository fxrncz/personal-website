import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { georama } from "./fonts";
import "./globals.css";
import type React from "react"

export const metadata: Metadata = {
  title: "Francis Oliver",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.className}`}>
        {children}
      </body>
    </html>
  );
}

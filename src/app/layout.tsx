"use client";
// import "./globals.css";
import StylesProvider from "@src/common/stylesProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Made Easy",
  description: "Coding Made Easy: A blog about coding and programming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} id="__next">
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}

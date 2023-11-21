import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

interface MenuProps {
  className: string;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}  suppressHydrationWarning={true}>
        {/* <Header /> */}
        {children}
        <div className="relative" id="portal"></div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

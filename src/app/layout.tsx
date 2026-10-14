import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "SkillTree Tracker 🌳",
  description: "An authentic skill tracking application built by Andrei",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-white text-black dark:bg-[#471920] dark:text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
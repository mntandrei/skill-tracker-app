import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillTree Tracker 🌳",
  description: "An authentic skill tracking application built by Andrei",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

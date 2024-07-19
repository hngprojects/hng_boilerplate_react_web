import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "~/components/layouts/Navbar";
import SideBar from "~/components/layouts/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={`antialiased flex min-h-screen bg-stroke-200 ${inter.className}`}
      >
        <SideBar />
        <div className="flex-auto">
          <Navbar />
          <div className="p-[30px]">{children}</div>
        </div>
      </body>
    </html>
  );
}

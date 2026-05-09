import type { Metadata } from "next";
import { Host_Grotesk, Boldonse } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const boldonse = Boldonse({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Rafi Arnouk",
  description: "Rafi Arnouk",
  icons: {
    icon: "/ralogo-blue.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${boldonse.variable} ${hostGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Aboreto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});

export const metadata: Metadata = {
  title: "Matias Rincon Yoga",
  description: "Curso de introducción al Yoga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${aboreto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E3E0E0]">{children}</body>
    </html>
  );
}

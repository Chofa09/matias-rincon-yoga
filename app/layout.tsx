import type { Metadata } from "next";
import { Aboreto, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});


const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

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
      className={`${dmSans.variable} ${aboreto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E3E0E0]">
        {children}

      <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Aboreto, DM_Sans, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'], // Choose the specific weights you need
  style: ['normal', 'italic'],          // Optional: Add italic if needed
  variable: '--font-playfair', 
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
      className={`${dmSans.variable} ${aboreto.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E3E0E0]">
        {children}

      <Footer />
      </body>
    </html>
  );
}

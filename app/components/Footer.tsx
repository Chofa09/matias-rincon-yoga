"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer () {
    const pathname = usePathname();
    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
  
    return (
        <footer className="w-full py-5 flex flex-col gap-4">
            {/* Divider */}
            <div className="border-t-1 border-[#3F1518] mx-4"/>

            <div className="w-full flex flex-col-reverse md:flex-row justify-between text-center md:text-start items-center md:items-start gap-4 px-2 md:px-20 py-8 md:py-2">
                
                <div className="flex flex-col gap-2 md:gap-4 mt-8 md:mt-0">
                    <div className="flex items-center gap-4 md:gap-2">
                        <Image src="/logo_mati.png" alt="Matias Rincon Yoga Logo" width={45} height={45} />
                        <p className="text-[22px]">Matias Rincon Yoga</p>
                    </div>

                    <p className="text-[14px] text-center md:text-start">© 2026 Matias Rincon Yoga</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-[18px] md:text-[16px]">
                    <div className="flex flex-col gap-4 md:gap-2">
                        <Link href='/' className="underline hover:scale-101" onClick={scrollToTop}>Home</Link>
                        <Link href='/#about-me' className="underline hover:scale-101">Sobre mí</Link>
                    </div>
                    <div>
                        <Link href='https://www.instagram.com/matiasrinconyoga/' target="_blank" className="underline hover:scale-101">Instagram</Link>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-2">
                        <p>Tel. +34 633547697</p>
                        <Link href={'mailto:yogaestudiolp@gmail.com'} className="underline hover:scale-101">yogaestudiolp@gmail.com</Link>
                    </div>
                </div>
            </div>

      </footer>
    )
}
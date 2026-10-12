"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Sobre mí", href: "/#about-me" },
  { label: "Cursos", href: "/cursos" },
  { label: "Textos", href: "/textos" },
  { label: "Clases", href: "/clases" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 w-full bg-[#E3E0E0] px-4 py-2 text-[#3F1518] transition-shadow duration-300 ease-in-out md:px-10 md:py-4 ${
        hasScrolled ? "shadow-[0_4px_12px_rgba(63,21,24,0.14)]" : "shadow-none"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="relative mx-auto flex w-full items-center justify-between text-sm md:text-base"
      >
        <Link
          href="/"
          aria-label="Matias Rincon Yoga - Inicio"
          className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F1518]"
        >
          <Image
            src="/logo_mati.png"
            alt=""
            width={40}
            height={40}
            className="size-10"
          />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex size-10 items-center justify-center rounded hover:bg-[#3F1518]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F1518] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-6"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`absolute right-0 top-full flex w-full flex-col gap-1 overflow-hidden bg-[#E3E0E0] text-right shadow-md transition-[max-height,opacity,transform] duration-300 ease-out md:hidden ${
            isOpen
              ? "max-h-80 translate-y-0 py-3 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              className="px-6 py-2 hover:bg-[#3F1518]/10 focus-visible:outline-2 focus-visible:outline-[#3F1518]"
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden flex-1 items-center justify-center gap-x-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              className="transition hover:underline focus-visible:underline"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

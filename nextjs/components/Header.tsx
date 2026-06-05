"use client";

import { useEffect, useState } from "react";
import { Monogram } from "./Logo";

const links = [
  { href: "#filosofi", label: "Filosofi" },
  { href: "#menu", label: "Hidangan" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#galeri", label: "Galeri" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* announcement bar */}
      <div className="hidden md:block bg-ink-900 text-paper/70">
        <div className="mx-auto max-w-shell px-6 lg:px-8 flex items-center justify-between py-2 text-[12.5px] tracking-wide">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
            Tersedia private dining &amp; chef&apos;s table
          </p>
          <p className="flex items-center gap-6">
            <span>Selasa–Minggu · 11.00–23.00</span>
            <a
              href="tel:+62215550198"
              className="ul-anim text-paper hover:text-brand-200"
            >
              Reservasi: +62 21 555 0198
            </a>
          </p>
        </div>
      </div>

      {/* main nav */}
      <div
        className={`transition-colors duration-500 ${
          solid
            ? "bg-paper/95 backdrop-blur shadow-sm border-b border-ink/10"
            : ""
        }`}
      >
        <nav
          className="mx-auto max-w-shell px-6 lg:px-8 flex items-center justify-between py-4"
          aria-label="Utama"
        >
          <a href="#" className="flex items-center gap-3 group">
            <span
              className={`transition-colors duration-300 ${
                solid ? "text-brand" : "text-brand-200"
              } group-hover:text-red`}
            >
              <Monogram />
            </span>
            <span className="leading-none">
              <span
                className={`block font-display text-[20px] font-semibold tracking-tight transition-colors duration-500 ${
                  solid ? "text-ink" : "text-paper"
                }`}
              >
                Kurnia<span className="text-red"> Seafood</span>
              </span>
              <span
                className={`block text-[10px] tracking-kicker uppercase transition-colors duration-500 ${
                  solid ? "text-steel" : "text-paper/55"
                }`}
              >
                Pesisir · Nusantara · Est. 1998
              </span>
            </span>
          </a>

          <div
            className={`hidden lg:flex items-center gap-9 text-[14.5px] transition-colors duration-500 ${
              solid ? "text-ink/70" : "text-paper/80"
            }`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`ul-anim ${solid ? "hover:text-ink" : "hover:text-paper"}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#reservasi"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-red px-5 py-2.5 text-[14px] font-semibold text-white shadow-lg shadow-red/20 transition hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
            >
              Reservasi
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border ${
                solid ? "border-ink/20 text-ink" : "border-paper/25 text-paper"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Buka menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-ink-900 text-paper border-t border-white/10"
        >
          <div className="px-6 py-6 flex flex-col gap-1 text-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservasi"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full bg-red px-5 py-3 font-semibold text-white"
            >
              Reservasi Meja
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

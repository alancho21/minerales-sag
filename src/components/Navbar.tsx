"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const isContactPage = pathname === "/contacto";

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo/logo-sag.png"
              alt="Minerales SAG"
              width={150}
              height={70}
              priority
              className="h-auto w-[120px] md:w-[150px]"
            />
          </Link>

          {/* MENÚ ESCRITORIO */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
            <Link
              href="/"
              className={`transition hover:text-[#d8b89c] ${
                pathname === "/" ? "text-[#d8b89c]" : ""
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/nosotros"
              className={`transition hover:text-[#d8b89c] ${
                pathname === "/nosotros" ? "text-[#d8b89c]" : ""
              }`}
            >
              Nosotros
            </Link>

            <Link
              href="/productos"
              className={`transition hover:text-[#d8b89c] ${
                pathname.startsWith("/productos") ? "text-[#d8b89c]" : ""
              }`}
            >
              Productos
            </Link>

            <Link
              href="/industrias"
              className={`transition hover:text-[#d8b89c] ${
                pathname === "/industrias" ? "text-[#d8b89c]" : ""
              }`}
            >
              Industrias
            </Link>

            <Link
              href="/contacto"
              className={`transition hover:text-[#d8b89c] ${
                pathname === "/contacto" ? "text-[#d8b89c]" : ""
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* BOTÓN ESCRITORIO */}
          <div className="hidden md:block">
            {isContactPage ? (
              <a
                href="https://wa.me/524611205106"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d8b89c] bg-[#d8b89c] px-5 py-2 text-sm font-medium !text-[#082238] transition hover:border-white hover:bg-white"
              >
                Hablar por WhatsApp
              </a>
            ) : (
              <Link
                href="/contacto"
                className="rounded-full border border-white bg-white/10 px-5 py-2 text-sm font-medium !text-white transition hover:bg-white hover:!text-[#082238]"
              >
                Solicitar cotización
              </Link>
            )}
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white md:hidden"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-[2px] w-5 bg-white transition-all duration-300 ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[9px] block h-[2px] w-5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-[17px] block h-[2px] w-5 bg-white transition-all duration-300 ${
                  isOpen ? "-translate-y-[10px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        {isOpen && (
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#082238] p-6 md:hidden">
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className={`border-b border-white/10 py-4 ${
                  pathname === "/"
                    ? "text-[#d8b89c]"
                    : "text-white"
                }`}
              >
                Inicio
              </Link>

              <Link
                href="/nosotros"
                onClick={closeMenu}
                className={`border-b border-white/10 py-4 ${
                  pathname === "/nosotros"
                    ? "text-[#d8b89c]"
                    : "text-white"
                }`}
              >
                Nosotros
              </Link>

              <Link
                href="/productos"
                onClick={closeMenu}
                className={`border-b border-white/10 py-4 ${
                  pathname.startsWith("/productos")
                    ? "text-[#d8b89c]"
                    : "text-white"
                }`}
              >
                Productos
              </Link>

              <Link
                href="/industrias"
                onClick={closeMenu}
                className={`border-b border-white/10 py-4 ${
                  pathname === "/industrias"
                    ? "text-[#d8b89c]"
                    : "text-white"
                }`}
              >
                Industrias
              </Link>

              <Link
                href="/contacto"
                onClick={closeMenu}
                className={`py-4 ${
                  pathname === "/contacto"
                    ? "text-[#d8b89c]"
                    : "text-white"
                }`}
              >
                Contacto
              </Link>
            </nav>

            {/* CTA MÓVIL */}
            {isContactPage ? (
              <a
                href="https://wa.me/524611205106"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-4 flex w-full justify-center rounded-full bg-[#d8b89c] px-6 py-3 font-medium !text-[#082238]"
              >
                Hablar por WhatsApp
              </a>
            ) : (
              <Link
                href="/contacto"
                onClick={closeMenu}
                className="mt-4 flex w-full justify-center rounded-full bg-[#d8b89c] px-6 py-3 font-medium !text-[#082238]"
              >
                Solicitar cotización
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-sag.png"
            alt="Minerales SAG"
            width={150}
            height={70}
            priority
            className="h-auto w-[130px] md:w-[150px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          <Link href="/" className="hover:text-[#d8b89c]">
            Inicio
          </Link>

          <Link href="/nosotros" className="hover:text-[#d8b89c]">
            Nosotros
          </Link>

          <Link href="/productos" className="hover:text-[#d8b89c]">
            Productos
          </Link>

          <Link href="/industrias" className="hover:text-[#d8b89c]">
            Industrias
          </Link>

          <Link href="/contacto" className="hover:text-[#d8b89c]">
            Contacto
          </Link>
        </nav>

        <Link
          href="/contacto"
          className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#082238]"
        >
          Solicitar cotización
        </Link>
      </div>
    </header>
  );
}
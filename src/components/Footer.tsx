import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#061a2b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-semibold">Minerales SAG</h3>

            <p className="mt-4 max-w-sm leading-7 text-white/65">
              Proveedor de minerales para diferentes aplicaciones industriales,
              disponibles bajo cotización según los requerimientos de cada
              cliente.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d8b89c]">
              Navegación
            </p>

            <div className="mt-5 flex flex-col gap-3 text-white/70">
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>

              <Link href="/nosotros" className="hover:text-white">
                Nosotros
              </Link>

              <Link href="/productos" className="hover:text-white">
                Productos
              </Link>

              <Link href="/industrias" className="hover:text-white">
                Industrias
              </Link>

              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d8b89c]">
              Contacto
            </p>

            <div className="mt-5 space-y-3 text-white/70">
              <a
                href="https://wa.me/524611205106"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                +52 461 120 5106
              </a>

              <a
                href="mailto:ventas.msag@gmail.com"
                className="block hover:text-white"
              >
                ventas.msag@gmail.com
              </a>

              <p>Tecamachalco, Puebla, México</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d8b89c]">
              Redes sociales
            </p>

            <div className="mt-5 flex flex-col gap-3 text-white/70">
              <a
                href="https://www.linkedin.com/company/minerales-sag/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/share/1EPo8mbmxK/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/minerasag"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Minerales SAG. Todos los derechos
            reservados.
          </p>

          <p>Minerales para la industria</p>
        </div>
      </div>
    </footer>
  );
}
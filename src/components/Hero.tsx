import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero-mina.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-[#d8b89c]">
            Minerales SAG
          </p>

          <h1 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            Descubre el potencial de la tierra
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Proveemos minerales procesados para diferentes aplicaciones
            industriales, disponibles en distintas granulometrías, presentaciones
            y soluciones bajo cotización.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="rounded-full bg-[#d8b89c] px-7 py-3 font-medium text-[#082238] hover:bg-[#caa78a]"
            >
              Ver productos
            </Link>

            <Link
              href="/contacto"
              className="rounded-full border border-white px-7 py-3 font-medium text-white hover:bg-white hover:text-[#082238]"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
        Explorar
      </div>
    </section>
  );
}
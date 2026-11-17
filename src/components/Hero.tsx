import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[88vh] items-center bg-cover bg-center md:min-h-screen"
      style={{
        backgroundImage: "url('/images/hero/hero-mina.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 md:bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#d8b89c] sm:text-sm">
            Minerales SAG
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-7xl">
            DESCUBRE EL POTENCIAL DE LA TIERRA
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Proveemos minerales procesados para diferentes aplicaciones
            industriales, disponibles en distintas granulometrías,
            presentaciones y soluciones bajo cotización.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/productos"
              className="flex justify-center rounded-full bg-[#d8b89c] px-7 py-3 font-medium text-[#082238] hover:bg-[#caa78a]"
            >
              Ver productos
            </Link>

           <Link
              href="/contacto"
              className="flex justify-center rounded-full border border-white bg-white/5 px-7 py-3 font-medium !text-white transition hover:bg-white hover:!text-[#082238]"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60 sm:block">
        Explorar
      </div>
    </section>
  );
}
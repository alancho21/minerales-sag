import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f4f0ea] py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
            Quiénes somos
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#082238] md:text-5xl">
            Minerales para las necesidades de la industria
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            Minerales SAG es una empresa dedicada a la exploración, operación,
            extracción y comercialización de minerales no metálicos,
            comprometida con ofrecer productos de calidad para diferentes
            procesos industriales.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-neutral-600">
            Trabajamos de la mano con nuestros clientes para entender sus
            requerimientos y proporcionar soluciones minerales adaptadas a sus
            necesidades.
          </p>

          <Link
            href="/nosotros"
            className="mt-8 inline-flex rounded-full bg-[#5a2f1f] px-7 py-3 font-medium text-white hover:bg-[#442216]"
          >
            Conoce más sobre nosotros
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a6c50]">
              01
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-[#082238]">
              Calidad
            </h3>

            <p className="mt-3 leading-7 text-neutral-600">
              Controlamos nuestros minerales mediante muestreos periódicos y
              análisis para mantener estándares adecuados para nuestros
              clientes.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a6c50]">
              02
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-[#082238]">
              Medio ambiente
            </h3>

            <p className="mt-3 leading-7 text-neutral-600">
              Buscamos desarrollar nuestras operaciones considerando el cuidado
              responsable del entorno.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-7">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a6c50]">
              03
            </span>

            <h3 className="mt-4 text-2xl font-semibold text-[#082238]">
              Compromiso
            </h3>

            <p className="mt-3 leading-7 text-neutral-600">
              Acompañamos a nuestros clientes para ayudarles a encontrar el
              material adecuado para sus procesos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
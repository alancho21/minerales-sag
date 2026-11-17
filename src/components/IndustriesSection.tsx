import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Fertilizantes",
    description:
      "Minerales utilizados como materias primas y componentes para diferentes formulaciones agrícolas.",
  },
  {
    number: "02",
    title: "Alimentos balanceados",
    description:
      "Materiales minerales empleados en distintas aplicaciones dentro de la industria de alimentación animal.",
  },
  {
    number: "03",
    title: "Filtración de agua",
    description:
      "Minerales con aplicaciones en procesos de filtración y acondicionamiento de agua.",
  },
  {
    number: "04",
    title: "Camas sanitarias",
    description:
      "Materiales absorbentes utilizados para la fabricación de productos sanitarios para mascotas.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#f4f0ea] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
              Aplicaciones
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#082238] md:text-5xl">
              Soluciones minerales para diferentes industrias
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-neutral-600">
              Nuestros minerales pueden utilizarse como materia prima en
              diferentes procesos industriales, dependiendo de las
              características y requerimientos de cada cliente.
            </p>

            <Link
              href="/industrias"
              className="mt-8 inline-flex rounded-full bg-[#5a2f1f] px-7 py-3 font-medium !text-white transition hover:bg-[#442216]"
            >
              Conocer aplicaciones
            </Link>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {industries.map((industry) => (
              <div
                key={industry.number}
                className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"
              >
                <span className="text-sm font-medium text-[#9a6c50]">
                  {industry.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold text-[#082238]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-neutral-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
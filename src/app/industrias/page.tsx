import Link from "next/link";
import Navbar from "@/components/Navbar";

const industries = [
  {
    title: "Fertilizantes",
    description:
      "Minerales utilizados como materias primas en diferentes formulaciones y procesos relacionados con el sector agrícola.",
    products: ["Óxido de Hierro", "Óxido de Zinc", "Bentonita", "Fósforo"],
  },
  {
    title: "Alimentos balanceados",
    description:
      "Minerales empleados en diferentes aplicaciones dentro de la producción de alimentos para animales.",
    products: ["Zeolita", "Bentonita Cálcica"],
  },
  {
    title: "Filtración de agua",
    description:
      "Materiales minerales utilizados en procesos de filtración y acondicionamiento de agua.",
    products: ["Zeolita"],
  },
  {
    title: "Camas sanitarias",
    description:
      "Minerales absorbentes utilizados en la fabricación de productos sanitarios para mascotas.",
    products: ["Bentonita Cálcica", "Bentonita Sódica"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <div className="bg-[#082238]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#082238] px-6 pb-20 pt-40 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
              Sectores
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Minerales para diferentes aplicaciones industriales
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Conoce algunos de los sectores en los que nuestros minerales
              pueden utilizarse como materia prima.
            </p>
          </div>
        </section>

        <section className="bg-[#f4f0ea] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {industries.map((industry, index) => (
                <article
                  key={industry.title}
                  className="rounded-2xl border border-black/10 bg-white p-8 md:p-10"
                >
                  <span className="text-sm font-medium text-[#9a6c50]">
                    0{index + 1}
                  </span>

                  <h2 className="mt-5 text-3xl font-semibold text-[#082238]">
                    {industry.title}
                  </h2>

                  <p className="mt-5 leading-8 text-neutral-600">
                    {industry.description}
                  </p>

                  <div className="mt-8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                      Minerales relacionados
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {industry.products.map((product) => (
                        <span
                          key={product}
                          className="rounded-full bg-[#f4f0ea] px-4 py-2 text-sm text-neutral-700"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-3xl bg-[#5a2f1f] px-8 py-14 md:px-14">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
                ¿Buscas un proveedor?
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                Cuéntanos qué mineral necesita tu empresa
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/70">
                Podemos conocer tus requerimientos de producto, cantidad,
                presentación y granulometría para preparar una cotización.
              </p>

              <Link
                href="/contacto"
                className="mt-8 inline-flex rounded-full bg-[#d8b89c] px-7 py-3 font-medium text-[#082238]"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
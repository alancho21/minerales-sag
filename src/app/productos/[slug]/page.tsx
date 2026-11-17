import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import { minerals } from "@/data/minerals";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return minerals.map((mineral) => ({
    slug: mineral.slug,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const mineral = minerals.find(
    (item) => item.slug === slug
  );

  if (!mineral) {
    notFound();
  }

  return (
    <>
      <div className="bg-[#082238]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#082238] px-6 pb-20 pt-40 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/productos"
              className="text-sm text-white/60 hover:text-white"
            >
              ← Volver a productos
            </Link>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
              Mineral industrial
            </p>

            <h1 className="mt-4 text-5xl font-semibold text-white md:text-6xl">
              {mineral.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {mineral.shortDescription}
            </p>
          </div>
        </section>

        <section className="bg-[#f4f0ea] py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src={mineral.image}
                alt={mineral.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
                Información
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#082238]">
                Características del producto
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                {mineral.description}
              </p>

              <div className="mt-10 border-t border-black/10 pt-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Presentación
                </p>

                <p className="mt-3 text-lg font-medium text-[#082238]">
                  {mineral.presentation}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Principales aplicaciones
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {mineral.uses.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href={`/contacto?producto=${mineral.slug}`}
                  className="rounded-full bg-[#5a2f1f] px-7 py-3 text-center font-medium text-white hover:bg-[#442216]"
                >
                  Cotizar este producto
                </Link>

                {mineral.technicalSheet && (
                  <Link
                    href={mineral.technicalSheet}
                    target="_blank"
                    className="rounded-full border border-[#5a2f1f] px-7 py-3 text-center font-medium text-[#5a2f1f]"
                  >
                    Descargar ficha técnica
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-3xl bg-[#082238] px-8 py-14 md:px-14">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
                Cotizaciones
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                ¿Necesitas {mineral.name} para tu proceso?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/70">
                Cuéntanos la cantidad, presentación y granulometría que
                necesitas para preparar una cotización de acuerdo con tus
                requerimientos.
              </p>

              <Link
                href={`/contacto?producto=${mineral.slug}`}
                className="mt-8 inline-flex rounded-full bg-[#d8b89c] px-7 py-3 font-medium !text-[#082238] transition hover:bg-white"
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
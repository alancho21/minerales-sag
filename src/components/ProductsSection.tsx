import Link from "next/link";
import MineralCard from "@/components/MineralCard";
import { minerals } from "@/data/minerals";

export default function ProductsSection() {
  return (
    <section className="bg-[#082238] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
              Nuestros minerales
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Materias primas para diferentes industrias
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Ofrecemos minerales procesados en diferentes presentaciones y
              granulometrías de acuerdo con los requerimientos de cada cliente.
            </p>
          </div>

          <Link
            href="/productos"
            className="w-fit rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#082238]"
            >
            Ver todos los productos
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {minerals.map((mineral) => (
            <MineralCard key={mineral.id} mineral={mineral} />
          ))}
        </div>
      </div>
    </section>
  );
}
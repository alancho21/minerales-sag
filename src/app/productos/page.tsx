import Navbar from "@/components/Navbar";
import MineralCard from "@/components/MineralCard";
import { minerals } from "@/data/minerals";

export default function ProductsPage() {
  return (
    <>
      <div className="bg-[#082238]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#082238] px-6 pb-20 pt-40 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
              Catálogo
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-semibold text-white md:text-6xl">
              Nuestros minerales
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Conoce los minerales disponibles y sus diferentes aplicaciones,
              presentaciones y características.
            </p>
          </div>
        </section>

        <section className="bg-[#f4f0ea] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-7 md:grid-cols-2">
              {minerals.map((mineral) => (
                <MineralCard key={mineral.id} mineral={mineral} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
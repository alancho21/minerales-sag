import Image from "next/image";
import Link from "next/link";
import type { Mineral } from "@/data/minerals";

type MineralCardProps = {
  mineral: Mineral;
};

export default function MineralCard({ mineral }: MineralCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={mineral.image}
          alt={mineral.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>

      <div className="p-7">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9a6c50]">
          Mineral industrial
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-[#082238]">
          {mineral.name}
        </h3>

        <p className="mt-4 leading-7 text-neutral-600">
          {mineral.shortDescription}
        </p>

        <p className="mt-5 text-sm font-medium text-[#5a2f1f]">
          {mineral.presentation}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {mineral.uses.slice(0, 3).map((use) => (
            <span
              key={use}
              className="rounded-full bg-[#f4f0ea] px-3 py-1 text-xs text-neutral-700"
            >
              {use}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-5">
          <Link
            href={`/productos/${mineral.slug}`}
            className="font-medium text-[#5a2f1f] hover:underline"
          >
            Ver producto →
          </Link>

          <Link
            href={`/contacto?producto=${mineral.slug}`}
            className="text-sm text-neutral-500 hover:text-[#5a2f1f]"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </article>
  );
}
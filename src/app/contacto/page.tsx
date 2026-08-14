import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";

type ContactPageProps = {
  searchParams: Promise<{
    producto?: string;
  }>;
};

const productNames: Record<string, string> = {
  zeolita: "Zeolita",
  bentonita: "Bentonita",
  "oxido-de-zinc": "Óxido de Zinc",
  dolomita: "Dolomita",
  hierro: "Hierro",
  manganeso: "Manganeso",
  yeso: "Yeso",
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const { producto } = await searchParams;

  const initialProduct = producto
    ? productNames[producto] ?? ""
    : "";

  return (
    <>
      <div className="bg-[#082238]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#082238] px-6 pb-20 pt-40 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
              Contacto
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Solicita una cotización
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Cuéntanos qué mineral necesita tu empresa y las características
              requeridas. Nuestro equipo podrá conocer tus necesidades y
              preparar una propuesta.
            </p>
          </div>
        </section>

        <section className="bg-[#f4f0ea] py-20">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
                Cuéntanos qué necesitas
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#082238]">
                Información para cotización
              </h2>

              <p className="mb-10 mt-4 max-w-2xl leading-7 text-neutral-600">
                Proporciona algunos datos sobre el material que buscas para
                poder establecer contacto con nuestro equipo comercial.
              </p>

              <QuoteForm initialProduct={initialProduct} />
            </div>

            <aside>
              <div className="sticky top-10 rounded-3xl bg-[#082238] p-8 text-white lg:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d8b89c]">
                  Minerales SAG
                </p>

                <h2 className="mt-4 text-3xl font-semibold">
                  Hablemos sobre tus requerimientos
                </h2>

                <p className="mt-5 leading-7 text-white/70">
                  Nuestro objetivo es conocer las necesidades de cada cliente
                  para ofrecer el material adecuado según cantidad,
                  presentación y granulometría.
                </p>

                <div className="mt-10 space-y-7 border-t border-white/15 pt-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      WhatsApp
                    </p>

                    <a
                      href="https://wa.me/524611205106"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-lg hover:text-[#d8b89c]"
                    >
                      +52 461 120 5106
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Correo electrónico
                    </p>

                    <a
                      href="mailto:ventas.msag@gmail.com"
                      className="mt-2 block break-all text-lg hover:text-[#d8b89c]"
                    >
                      ventas.msag@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Ubicación
                    </p>

                    <p className="mt-2 leading-7 text-white/80">
                      Tecamachalco, Puebla, México
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
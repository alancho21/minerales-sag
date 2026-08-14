import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#082238]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#082238] px-6 pb-20 pt-40 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b89c]">
              Nosotros
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Trabajamos de la mano con nuestros clientes
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Conoce más sobre Minerales SAG, nuestras operaciones y el
              compromiso que tenemos con la calidad de nuestros productos.
            </p>
          </div>
        </section>

        <section className="bg-[#f4f0ea] py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
                Quiénes somos
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#082238]">
                Minerales para diferentes procesos industriales
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-neutral-600">
              <p>
                Minerales SAG es una empresa fundada formalmente en 2023,
                dedicada a la exploración, operación, extracción y
                comercialización de minerales no metálicos.
              </p>

              <p>
                Nuestro objetivo es trabajar de la mano con nuestros clientes,
                ofreciendo productos de calidad y acompañamiento para encontrar
                materiales adecuados para sus procesos.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl bg-[#f4f0ea] p-8">
                <span className="text-sm font-medium text-[#9a6c50]">01</span>

                <h2 className="mt-5 text-2xl font-semibold text-[#082238]">
                  Calidad
                </h2>

                <p className="mt-4 leading-7 text-neutral-600">
                  Buscamos mantener la calidad de nuestros minerales mediante
                  controles, muestreos y análisis.
                </p>
              </article>

              <article className="rounded-2xl bg-[#f4f0ea] p-8">
                <span className="text-sm font-medium text-[#9a6c50]">02</span>

                <h2 className="mt-5 text-2xl font-semibold text-[#082238]">
                  Medio ambiente
                </h2>

                <p className="mt-4 leading-7 text-neutral-600">
                  Desarrollamos nuestras operaciones considerando el cuidado del
                  entorno y una operación responsable.
                </p>
              </article>

              <article className="rounded-2xl bg-[#f4f0ea] p-8">
                <span className="text-sm font-medium text-[#9a6c50]">03</span>

                <h2 className="mt-5 text-2xl font-semibold text-[#082238]">
                  Compromiso
                </h2>

                <p className="mt-4 leading-7 text-neutral-600">
                  Buscamos comprender las necesidades de cada cliente para
                  ofrecer soluciones adecuadas a sus requerimientos.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f0ea] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
                  Operaciones
                </p>

                <h2 className="mt-4 text-4xl font-semibold text-[#082238]">
                  Presencia operativa
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-neutral-600">
                  Minerales SAG cuenta con operaciones relacionadas con la
                  extracción y comercialización de minerales en diferentes
                  regiones del país.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Puebla", "Hidalgo", "Guanajuato", "San Luis Potosí"].map(
                  (state) => (
                    <div
                      key={state}
                      className="flex min-h-32 items-center justify-center rounded-2xl bg-white p-6 text-center"
                    >
                      <p className="text-xl font-semibold text-[#082238]">
                        {state}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#9a6c50]">
                  Control de calidad
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#082238]">
                  Conocer el material es parte del proceso
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Humedad",
                  "Ley mineral",
                  "Análisis mineralógicos",
                  "Composición química",
                  "Control de minerales no deseados",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-black/10 p-5"
                  >
                    <p className="font-medium text-[#082238]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
"use client";

import { FormEvent, useState } from "react";

type QuoteFormProps = {
  initialProduct?: string;
};

const products = [
  "Zeolita",
  "Bentonita",
  "Hierro",
  "Óxido de Zinc",
  "Manganeso",
  "Dolomita",
  "Yeso",
];

export default function QuoteForm({
  initialProduct = "",
}: QuoteFormProps) {
  const [product, setProduct] = useState(initialProduct);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const company = form.get("company");
    const phone = form.get("phone");
    const email = form.get("email");
    const quantity = form.get("quantity");
    const granulometry = form.get("granulometry");
    const message = form.get("message");

    const whatsappMessage = `
Hola, me gustaría solicitar una cotización con Minerales SAG.

Nombre: ${name}
Empresa: ${company}
Teléfono: ${phone}
Correo: ${email}

Producto: ${product}
Cantidad aproximada: ${quantity}
Granulometría requerida: ${granulometry || "Por definir"}

Comentarios:
${message || "Sin comentarios adicionales."}
    `.trim();

    const whatsappNumber = "524611205106";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[#082238]"
          >
            Nombre *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-[#082238]"
          >
            Empresa *
          </label>

          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Nombre de la empresa"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[#082238]"
          >
            Teléfono *
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Teléfono de contacto"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[#082238]"
          >
            Correo electrónico *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="correo@empresa.com"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="product"
          className="mb-2 block text-sm font-medium text-[#082238]"
        >
          Producto de interés *
        </label>

        <select
          id="product"
          name="product"
          required
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
        >
          <option value="">Selecciona un mineral</option>

          {products.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-medium text-[#082238]"
          >
            Cantidad aproximada *
          </label>

          <input
            id="quantity"
            name="quantity"
            type="text"
            required
            placeholder="Ej. 10 toneladas"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
          />
        </div>

        <div>
          <label
            htmlFor="granulometry"
            className="mb-2 block text-sm font-medium text-[#082238]"
          >
            Granulometría
          </label>

          <input
            id="granulometry"
            name="granulometry"
            type="text"
            placeholder="Ej. Malla 60-80"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[#082238]"
        >
          Mensaje
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Cuéntanos un poco más sobre lo que necesitas..."
          className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#9a6c50]"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-[#5a2f1f] px-8 py-3 font-medium text-white hover:bg-[#442216]"
      >
        Solicitar cotización por WhatsApp
      </button>

      <p className="text-sm leading-6 text-neutral-500">
        Al continuar se abrirá WhatsApp con la información proporcionada para
        iniciar el proceso de cotización.
      </p>
    </form>
  );
}
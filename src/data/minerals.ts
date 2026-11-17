export type Mineral = {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  presentation: string;
  uses: string[];
  image: string;
  technicalSheet?: string;
};

export const minerals: Mineral[] = [
  {
    id: 1,
    name: "Zeolita",
    slug: "zeolita",
    shortDescription:
      "Mineral natural de estructura porosa utilizado en diferentes aplicaciones agrícolas e industriales.",
    description:
    "Las zeolitas son minerales de estructura porosa utilizados en diversas aplicaciones debido a sus propiedades de intercambio iónico y absorción. Se emplean principalmente en agricultura, acondicionamiento de suelos y procesos de filtración.",technicalSheet: "/pdf/zeolita.pdf",
    presentation: "Material en breña o molido · Malla 60-80",
    uses: [
      "Agricultura",
      "Acondicionamiento de suelos",
      "Fertilización",
      "Filtración de agua",
    ],
    image: "/images/products/zeolita.jpg",
  },
  {
    id: 2,
    name: "Bentonita Sodica",
    slug: "bentonita-sodica",
    shortDescription:
      "Arcilla mineral con propiedades absorbentes utilizada en diferentes procesos y aplicaciones industriales.",
   description:
  "La bentonita es una arcilla mineral con propiedades absorbentes utilizada en diferentes aplicaciones industriales. Dependiendo de su composición puede emplearse en procesos relacionados con alimentos para animales, camas sanitarias y otros procesos industriales.",technicalSheet: "/pdf/bentonita.pdf",
    presentation: "Material molido · Malla 60-80",
    uses: [
      "Alimentos para animales",
      "Camas sanitarias",
      "Procesos industriales",
    ],
    image: "/images/products/bentonita-sodica.jpg",
  },
  {
    id: 3,
    name: "Óxido de Zinc",
    slug: "oxido-de-zinc",
    shortDescription:
      "Mineral procesado utilizado como materia prima para diferentes sectores industriales.",
   description:
  "El óxido de zinc es un mineral utilizado como materia prima en diferentes sectores industriales, incluyendo fertilizantes, alimentos, cerámica, plásticos y cauchos.",technicalSheet: "/pdf/oxido-zinc.pdf",
    presentation: "Material molido · Malla 100-120",
    uses: [
      "Fertilizantes",
      "Alimentos",
      "Cerámica",
      "Plásticos y cauchos",
    ],
    image: "/images/products/oxido-zinc.jpg",
  },
  {
    id: 4,
    name: "Dolomita",
    slug: "dolomita",
    shortDescription:
      "Carbonato natural de calcio y magnesio empleado en diferentes aplicaciones industriales.",
    description:
  "La dolomita es un carbonato natural de calcio y magnesio utilizado en construcción, producción de cemento, productos agrícolas y diferentes procesos metalúrgicos.", technicalSheet: "/pdf/dolomita.pdf",
    presentation: "Material en breña",
    uses: [
      "Construcción",
      "Cemento",
      "Productos agrícolas",
      "Industria metalúrgica",
    ],
    image: "/images/products/dolomita.jpg",
  },
];
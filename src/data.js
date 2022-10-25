export const data = [
  {
    id: 1,
    title: "Region",
    authors: "Suzanne Collins",
    num_pages: 374,
    rating: 4.33,
  },
  {
    id: 2,
    title: "Bureau B1",
    authors: "J.K. Rowling",
    num_pages: 870,
    rating: 4.48,
  },
  {
    id: 3,
    title: "Managers",
    authors: "Harper Lee",
    num_pages: 324,
    rating: 4.27,
  },
  {
    id: 4,
    title: "Commercial C1",
    authors: "Jane Austen",
    num_pages: 279,
    rating: 4.25,
  },
  {
    id: 5,
    title: "Commercial C2",
    authors: "Stephenie Meyer",
    num_pages: 498,
    rating: 3.58,
  },
  {
    id: 6,
    title: "technico",
    authors: "Markus Zusak",
    num_pages: 552,
    rating: 4.36,
  },
];

export const nombreCommerciaux = [
  { title: "Effectif cible", field: "rating" },
  { title: "Effectif réèl", field: "rating" },
  { title: "Effectif Pro", field: "rating" },
  { title: "réalisé Pro (MB)", field: "rating" },
  { title: "taux d'atteinte", field: "rating" },
  { title: "Nombre de ventes", field: "rating" },
  { title: "Panier moyen", field: "rating" },
  { title: "Taux de retractation", field: "rating" },
];

//elements verticale commerce
export const resto = [
  { title: "Nombre", field: "rating" },
  { title: "%", field: "rating" },
  { title: "décochage module", field: "rating" },
];
export const beauteSante = [
  { title: "Nombre", field: "rating" },
  { title: "%", field: "rating" },
  { title: "décochage module", field: "rating" },
];
export const commerce = [
  { title: "Nombre", field: "rating" },
  { title: "%", field: "rating" },
  { title: "décochage module", field: "rating" },
];

// verticales
export const verticaleCommerce = [...resto, ...beauteSante, ...commerce];
export const verticaleArtisants = [
  { title: "Nombre", field: "rating" },
  { title: "%", field: "rating" },
  { title: "décochage module", field: "rating" },
];
export const verticaleAgenceDeComm = [
  { title: "Nombre", field: "rating" },
  { title: "%", field: "rating" },
];

export const verticales = [
  ...verticaleArtisants,
  ...verticaleCommerce,
  ...verticaleAgenceDeComm,
];
export const duree = [
  { title: "48 (ou 36)", field: "rating" },
  { title: "24", field: "rating" },
  { title: "12", field: "rating" },
];
export const essentielVisite = [
  { title: "Nombre ", field: "rating" },
  { title: "%", field: "rating" },
];
export const expert = [
  { title: "Nombre ", field: "rating" },
  { title: "%", field: "rating" },
];
export const premium = [
  { title: "Nombre ", field: "rating" },
  { title: "%", field: "rating" },
];

export const site = [{ title: "nombre", field: "rating" }];
export const SEO = [{ title: "nombre", field: "rating" }];
export const SEA = [{ title: "nombre", field: "rating" }];
export const eRep = [{ title: "nombre", field: "rating" }];
export const module = [{ title: "nombre", field: "rating" }];
export const photoVideo = [
  { title: "nombre", field: "rating" },
  { title: "taux de transfo", field: "rating" },
];

export const produitsSeuls = [
  ...site,
  ...SEO,
  ...SEA,
  ...eRep,
  ...module,
  ...photoVideo,
];

export const pack = [...essentielVisite, ...expert, ...premium];

export const typologieVente1 = [
  ...verticales,
  ...duree,
  ...pack,
  ...produitsSeuls,
];

// générales;
export const Acqui = [...nombreCommerciaux, ...typologieVente1];
export const classement = [
  { title: "Classement global", field: "authors" },
  { title: "Classement Pro", field: "num_pages" },
  { title: "Classement client", field: "rating" },
];

export const activeColumns = [
  {
    title: "",
    field: "title",
  },
  ...classement,
  ...Acqui,
];

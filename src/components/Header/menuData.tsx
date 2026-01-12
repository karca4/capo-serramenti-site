import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 0,
    title: "News",
    path: "/blog",
    newTab: false,
  },
  {
    id: 1,
    title: "Chi siamo",
    path: "/company",
    newTab: false,
  },
  {
    id: 2,
    title: "Prodotti",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Lavorazioni in Alluminio",
        path: "/product-details/alluminio",
        newTab: false,
      },
      {
        id: 22,
        title: "PVC",
        path: "/product-details/pvc",
        newTab: false,
      },
      {
        id: 23,
        title: "Zanzariere",
        path: "/product-details/zanzariere",
        newTab: false,
      },
      {
        id: 24,
        title: "Lavorazioni in Ferro",
        path: "/product-details/ferro",
        newTab: false,
      },
      {
        id: 25,
        title: "Blindati",
        path: "/product-details/blindati",
        newTab: false,
      },
      {
        id: 26,
        title: "Strutture e tende da sole",
        path: "/product-details/strutture",
        newTab: false,
      },
      {
        id: 27,
        title: "Opere per interni",
        path: "/product-details/interni",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Galleria",
    path: "/gallery",
    newTab: false,
  },
  {
    id: 4,
    title: "Contatti",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;

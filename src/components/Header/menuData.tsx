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
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "PVC",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Zanzariere",
        path: "/blog",
        newTab: false,
      },
      {
        id: 24,
        title: "Lavorazioni in Ferro",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 25,
        title: "Blindati",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 26,
        title: "Strutture e tende da sole",
        path: "/error",
        newTab: false,
      },
      {
        id: 27,
        title: "Opere per interni",
        path: "/error",
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

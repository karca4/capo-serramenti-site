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
        title: "Prodotto1",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Prodotto1",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Error Page",
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

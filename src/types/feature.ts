import type { JSX } from "react";
export type Feature = {
  id: string;
  icon?: JSX.Element;
  title: string;
  paragraph: string;
  description?: string;
  image?: string;
  relatedFeatures?: Feature[];
  gallery?: string
};

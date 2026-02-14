type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author?: Author | null;
  tags: string[];
  publishDate: string;
  url?: string;
};

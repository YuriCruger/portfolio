export type Card = {
  id: string;
  title: string;
  description: string;
  image: string;
  className: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  repository: string;
  web: string;
  cards: Card[];
  technologies: string[];
};

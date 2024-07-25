export type Article = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  metaDescription: string | null;
  metaTitle: string | null;
  metaSlug: string | null;
  status?: "Option1" | null;
};

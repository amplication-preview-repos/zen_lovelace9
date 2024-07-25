export type Book = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string | null;
  title: string | null;
  content: string | null;
  outline: string | null;
  status?: "Option1" | null;
};

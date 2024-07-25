export type EBook = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  author: string | null;
  content: string | null;
  outline: string | null;
  status?: "Option1" | null;
};

import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  metaSlug?: SortOrder;
  status?: SortOrder;
};

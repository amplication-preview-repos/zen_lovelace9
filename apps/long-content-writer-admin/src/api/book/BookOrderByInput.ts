import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  author?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  outline?: SortOrder;
  status?: SortOrder;
};

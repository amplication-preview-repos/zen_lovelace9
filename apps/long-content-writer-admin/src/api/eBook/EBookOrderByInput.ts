import { SortOrder } from "../../util/SortOrder";

export type EBookOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  author?: SortOrder;
  content?: SortOrder;
  outline?: SortOrder;
  status?: SortOrder;
};

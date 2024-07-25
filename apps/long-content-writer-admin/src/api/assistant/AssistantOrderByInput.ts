import { SortOrder } from "../../util/SortOrder";

export type AssistantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  status?: SortOrder;
};

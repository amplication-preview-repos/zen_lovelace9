import { SortOrder } from "../../util/SortOrder";

export type YouTubeVideoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  url?: SortOrder;
  mainKeyword?: SortOrder;
  content?: SortOrder;
};

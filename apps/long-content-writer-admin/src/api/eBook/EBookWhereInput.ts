import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EBookWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  outline?: StringNullableFilter;
  status?: "Option1";
};

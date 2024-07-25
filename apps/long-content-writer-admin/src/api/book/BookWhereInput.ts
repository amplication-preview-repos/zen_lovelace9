import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookWhereInput = {
  id?: StringFilter;
  author?: StringNullableFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  outline?: StringNullableFilter;
  status?: "Option1";
};

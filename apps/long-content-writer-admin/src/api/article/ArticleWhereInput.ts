import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ArticleWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  metaSlug?: StringNullableFilter;
  status?: "Option1";
};

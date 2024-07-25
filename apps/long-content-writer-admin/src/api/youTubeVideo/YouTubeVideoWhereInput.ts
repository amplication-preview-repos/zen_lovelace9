import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type YouTubeVideoWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  mainKeyword?: StringNullableFilter;
  content?: StringNullableFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssistantWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  status?: "Option1";
};

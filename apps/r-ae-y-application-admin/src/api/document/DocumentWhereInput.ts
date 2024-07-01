import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  fileContent?: JsonFilter;
  fileName?: StringNullableFilter;
  fileType?: StringNullableFilter;
  id?: StringFilter;
};

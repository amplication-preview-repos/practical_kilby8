import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RaWhereInput = {
  acknowledgedBy?: StringNullableFilter;
  id?: StringFilter;
  locationName?: StringNullableFilter;
  preparedBy?: StringNullableFilter;
  raDetails?: JsonFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BiaWhereInput = {
  bcpCoordinatorName?: StringNullableFilter;
  departmentDescription?: StringNullableFilter;
  departmentName?: StringNullableFilter;
  id?: StringFilter;
  secondarySpocName?: StringNullableFilter;
};

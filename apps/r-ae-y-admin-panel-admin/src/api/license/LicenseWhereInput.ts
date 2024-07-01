import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type LicenseWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  users?: UserListRelationFilter;
};

import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LicenseWhereUniqueInput } from "../license/LicenseWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  canDownload?: BooleanNullableFilter;
  canDownloadFiles?: BooleanNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  license?: LicenseWhereUniqueInput;
  licenseRelation?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  roleRelation?: StringNullableFilter;
  username?: StringFilter;
};

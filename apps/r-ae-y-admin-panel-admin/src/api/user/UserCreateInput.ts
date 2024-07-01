import { LicenseWhereUniqueInput } from "../license/LicenseWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  canDownload?: boolean | null;
  canDownloadFiles?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  license?: LicenseWhereUniqueInput | null;
  licenseRelation?: string | null;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roleRelation?: string | null;
  roles: InputJsonValue;
  username: string;
};

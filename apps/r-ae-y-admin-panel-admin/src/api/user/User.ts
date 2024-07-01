import { License } from "../license/License";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";

export type User = {
  canDownload: boolean | null;
  canDownloadFiles: boolean | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  license?: License | null;
  licenseRelation: string | null;
  role?: Role | null;
  roleRelation: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

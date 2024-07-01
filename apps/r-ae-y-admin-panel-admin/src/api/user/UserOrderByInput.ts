import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  canDownload?: SortOrder;
  canDownloadFiles?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  licenseId?: SortOrder;
  licenseRelation?: SortOrder;
  password?: SortOrder;
  roleId?: SortOrder;
  roleRelation?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};

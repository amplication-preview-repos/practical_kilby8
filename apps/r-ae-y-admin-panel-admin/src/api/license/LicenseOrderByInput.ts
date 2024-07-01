import { SortOrder } from "../../util/SortOrder";

export type LicenseOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  modules?: SortOrder;
  updatedAt?: SortOrder;
};

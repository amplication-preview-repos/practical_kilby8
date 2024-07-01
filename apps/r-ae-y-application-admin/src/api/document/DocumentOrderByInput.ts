import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  fileContent?: SortOrder;
  fileName?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

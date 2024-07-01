import { Bia as TBia } from "../api/bia/Bia";

export const BIA_TITLE_FIELD = "bcpCoordinatorName";

export const BiaTitle = (record: TBia): string => {
  return record.bcpCoordinatorName?.toString() || String(record.id);
};

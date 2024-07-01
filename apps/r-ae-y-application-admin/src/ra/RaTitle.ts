import { Ra as TRa } from "../api/ra/Ra";

export const RA_TITLE_FIELD = "locationName";

export const RaTitle = (record: TRa): string => {
  return record.locationName?.toString() || String(record.id);
};

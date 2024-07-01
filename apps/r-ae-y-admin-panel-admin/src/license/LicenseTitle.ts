import { License as TLicense } from "../api/license/License";

export const LICENSE_TITLE_FIELD = "id";

export const LicenseTitle = (record: TLicense): string => {
  return record.id?.toString() || String(record.id);
};

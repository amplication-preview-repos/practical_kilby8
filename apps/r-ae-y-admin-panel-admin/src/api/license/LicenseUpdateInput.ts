import { UserUpdateManyWithoutLicensesInput } from "./UserUpdateManyWithoutLicensesInput";

export type LicenseUpdateInput = {
  expiryDate?: Date | null;
  modules?: Array<"Option1">;
  users?: UserUpdateManyWithoutLicensesInput;
};

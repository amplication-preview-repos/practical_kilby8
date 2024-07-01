import { UserCreateNestedManyWithoutLicensesInput } from "./UserCreateNestedManyWithoutLicensesInput";

export type LicenseCreateInput = {
  expiryDate?: Date | null;
  modules?: Array<"Option1">;
  users?: UserCreateNestedManyWithoutLicensesInput;
};

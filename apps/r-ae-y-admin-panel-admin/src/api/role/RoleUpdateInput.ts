import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};

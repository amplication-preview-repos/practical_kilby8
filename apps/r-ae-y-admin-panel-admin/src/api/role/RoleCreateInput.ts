import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};

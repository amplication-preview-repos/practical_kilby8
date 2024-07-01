import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { LicenseTitle } from "../license/LicenseTitle";
import { RoleTitle } from "../role/RoleTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="canDownload" source="canDownload" />
        <BooleanInput label="canDownloadFiles" source="canDownloadFiles" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceInput source="license.id" reference="License" label="license">
          <SelectInput optionText={LicenseTitle} />
        </ReferenceInput>
        <TextInput label="licenseRelation" source="licenseRelation" />
        <PasswordInput label="Password" source="password" />
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <TextInput label="roleRelation" source="roleRelation" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};

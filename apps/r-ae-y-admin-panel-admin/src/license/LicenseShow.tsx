import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { LICENSE_TITLE_FIELD } from "./LicenseTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const LicenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="modules" source="modules" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="licenseId" label="Users">
          <Datagrid rowClick="show">
            <BooleanField label="canDownload" source="canDownload" />
            <BooleanField label="canDownloadFiles" source="canDownloadFiles" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="license"
              source="license.id"
              reference="License"
            >
              <TextField source={LICENSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="licenseRelation" source="licenseRelation" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="roleRelation" source="roleRelation" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

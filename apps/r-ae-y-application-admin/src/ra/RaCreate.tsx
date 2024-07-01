import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="acknowledgedBy" source="acknowledgedBy" />
        <TextInput label="locationName" source="locationName" />
        <TextInput label="preparedBy" source="preparedBy" />
        <div />
      </SimpleForm>
    </Create>
  );
};

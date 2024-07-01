import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="acknowledgedBy" source="acknowledgedBy" />
        <TextInput label="locationName" source="locationName" />
        <TextInput label="preparedBy" source="preparedBy" />
        <div />
      </SimpleForm>
    </Edit>
  );
};

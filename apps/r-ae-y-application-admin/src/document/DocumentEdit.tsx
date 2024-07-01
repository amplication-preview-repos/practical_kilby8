import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="fileName" source="fileName" />
        <TextInput label="fileType" source="fileType" />
      </SimpleForm>
    </Edit>
  );
};

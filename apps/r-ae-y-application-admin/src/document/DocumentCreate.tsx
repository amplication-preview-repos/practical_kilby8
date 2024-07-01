import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="fileName" source="fileName" />
        <TextInput label="fileType" source="fileType" />
      </SimpleForm>
    </Create>
  );
};

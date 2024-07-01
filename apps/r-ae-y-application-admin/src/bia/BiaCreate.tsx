import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BiaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bcpCoordinatorName" source="bcpCoordinatorName" />
        <TextInput
          label="departmentDescription"
          multiline
          source="departmentDescription"
        />
        <TextInput label="departmentName" source="departmentName" />
        <TextInput label="secondarySPOCName" source="secondarySpocName" />
      </SimpleForm>
    </Create>
  );
};

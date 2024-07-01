import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BiaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

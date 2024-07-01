import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GapAssessmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="actionRequired" multiline source="actionRequired" />
        <TextInput label="assessmentArea" source="assessmentArea" />
        <TextInput label="gapDescription" multiline source="gapDescription" />
      </SimpleForm>
    </Edit>
  );
};

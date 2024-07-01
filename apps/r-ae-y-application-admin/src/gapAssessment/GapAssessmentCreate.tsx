import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GapAssessmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="actionRequired" multiline source="actionRequired" />
        <TextInput label="assessmentArea" source="assessmentArea" />
        <TextInput label="gapDescription" multiline source="gapDescription" />
      </SimpleForm>
    </Create>
  );
};

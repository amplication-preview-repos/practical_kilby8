import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GapAssessmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="actionRequired" source="actionRequired" />
        <TextField label="assessmentArea" source="assessmentArea" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gapDescription" source="gapDescription" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

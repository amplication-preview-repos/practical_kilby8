import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BiaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bcpCoordinatorName" source="bcpCoordinatorName" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="departmentDescription"
          source="departmentDescription"
        />
        <TextField label="departmentName" source="departmentName" />
        <TextField label="ID" source="id" />
        <TextField label="secondarySPOCName" source="secondarySpocName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

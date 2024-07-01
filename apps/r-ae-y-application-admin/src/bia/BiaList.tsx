import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BiaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BIAS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

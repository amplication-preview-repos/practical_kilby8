import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LicenseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Licenses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="modules" source="modules" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

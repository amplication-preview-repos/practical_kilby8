import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RAS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="acknowledgedBy" source="acknowledgedBy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="locationName" source="locationName" />
        <TextField label="preparedBy" source="preparedBy" />
        <TextField label="raDetails" source="raDetails" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

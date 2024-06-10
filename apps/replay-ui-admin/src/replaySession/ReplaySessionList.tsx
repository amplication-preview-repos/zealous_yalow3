import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReplaySessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReplaySessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="errorBars" source="errorBars" />
        <TextField label="ID" source="id" />
        <TextField label="replaySessionId" source="replaySessionId" />
        <TextField label="Session" source="session" />
        <TextField label="tabSwitchBars" source="tabSwitchBars" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

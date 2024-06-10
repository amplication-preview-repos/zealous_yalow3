import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReplaySessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="errorBars" source="errorBars" />
        <TextField label="ID" source="id" />
        <TextField label="replaySessionId" source="replaySessionId" />
        <TextField label="Session" source="session" />
        <TextField label="tabSwitchBars" source="tabSwitchBars" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

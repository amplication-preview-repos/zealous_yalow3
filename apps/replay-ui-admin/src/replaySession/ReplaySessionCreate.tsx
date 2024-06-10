import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReplaySessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="replaySessionId" source="replaySessionId" />
        <TextInput label="Session" source="session" />
        <div />
      </SimpleForm>
    </Create>
  );
};

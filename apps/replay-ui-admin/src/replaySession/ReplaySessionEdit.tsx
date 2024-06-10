import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReplaySessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="replaySessionId" source="replaySessionId" />
        <TextInput label="Session" source="session" />
        <div />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LiveSessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="liveSessionId" source="liveSessionId" />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};

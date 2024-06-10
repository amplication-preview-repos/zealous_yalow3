import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LiveSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="liveSessionId" source="liveSessionId" />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};

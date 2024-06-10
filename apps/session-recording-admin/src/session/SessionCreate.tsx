import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { NetworkActivityTitle } from "../networkActivity/NetworkActivityTitle";
import { RecordingTitle } from "../recording/RecordingTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <ReferenceArrayInput
          source="networkActivities"
          reference="NetworkActivity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NetworkActivityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="recordings"
          reference="Recording"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecordingTitle} />
        </ReferenceArrayInput>
        <TextInput label="sessionId" source="sessionId" />
        <DateTimeInput label="startTime" source="startTime" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { NetworkActivityTitle } from "../networkActivity/NetworkActivityTitle";
import { RecordingTitle } from "../recording/RecordingTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

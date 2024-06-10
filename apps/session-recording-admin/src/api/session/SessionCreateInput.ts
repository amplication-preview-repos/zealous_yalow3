import { NetworkActivityCreateNestedManyWithoutSessionsInput } from "./NetworkActivityCreateNestedManyWithoutSessionsInput";
import { RecordingCreateNestedManyWithoutSessionsInput } from "./RecordingCreateNestedManyWithoutSessionsInput";

export type SessionCreateInput = {
  endTime?: Date | null;
  networkActivities?: NetworkActivityCreateNestedManyWithoutSessionsInput;
  recordings?: RecordingCreateNestedManyWithoutSessionsInput;
  sessionId?: string | null;
  startTime?: Date | null;
};

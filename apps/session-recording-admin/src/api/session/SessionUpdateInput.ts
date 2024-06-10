import { NetworkActivityUpdateManyWithoutSessionsInput } from "./NetworkActivityUpdateManyWithoutSessionsInput";
import { RecordingUpdateManyWithoutSessionsInput } from "./RecordingUpdateManyWithoutSessionsInput";

export type SessionUpdateInput = {
  endTime?: Date | null;
  networkActivities?: NetworkActivityUpdateManyWithoutSessionsInput;
  recordings?: RecordingUpdateManyWithoutSessionsInput;
  sessionId?: string | null;
  startTime?: Date | null;
};

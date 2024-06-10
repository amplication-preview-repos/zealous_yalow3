import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type RecordingCreateInput = {
  maskedFields?: InputJsonValue;
  recordingId?: string | null;
  session?: SessionWhereUniqueInput | null;
};

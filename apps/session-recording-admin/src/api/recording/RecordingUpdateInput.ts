import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type RecordingUpdateInput = {
  maskedFields?: InputJsonValue;
  recordingId?: string | null;
  session?: SessionWhereUniqueInput | null;
};

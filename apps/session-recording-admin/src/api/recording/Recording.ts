import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type Recording = {
  createdAt: Date;
  id: string;
  maskedFields: JsonValue;
  recordingId: string | null;
  session?: Session | null;
  updatedAt: Date;
};

import { JsonValue } from "type-fest";

export type ReplaySession = {
  createdAt: Date;
  errorBars: JsonValue;
  id: string;
  replaySessionId: string | null;
  session: string | null;
  tabSwitchBars: JsonValue;
  updatedAt: Date;
};

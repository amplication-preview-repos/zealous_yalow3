import { InputJsonValue } from "../../types";

export type ReplaySessionCreateInput = {
  errorBars?: InputJsonValue;
  replaySessionId?: string | null;
  session?: string | null;
  tabSwitchBars?: InputJsonValue;
};

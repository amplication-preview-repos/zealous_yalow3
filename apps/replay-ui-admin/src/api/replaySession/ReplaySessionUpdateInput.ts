import { InputJsonValue } from "../../types";

export type ReplaySessionUpdateInput = {
  errorBars?: InputJsonValue;
  replaySessionId?: string | null;
  session?: string | null;
  tabSwitchBars?: InputJsonValue;
};

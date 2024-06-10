import { ReplaySession as TReplaySession } from "../api/replaySession/ReplaySession";

export const REPLAYSESSION_TITLE_FIELD = "replaySessionId";

export const ReplaySessionTitle = (record: TReplaySession): string => {
  return record.replaySessionId?.toString() || String(record.id);
};

import { LiveSession as TLiveSession } from "../api/liveSession/LiveSession";

export const LIVESESSION_TITLE_FIELD = "liveSessionId";

export const LiveSessionTitle = (record: TLiveSession): string => {
  return record.liveSessionId?.toString() || String(record.id);
};

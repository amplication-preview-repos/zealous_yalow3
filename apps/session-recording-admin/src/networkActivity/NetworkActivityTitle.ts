import { NetworkActivity as TNetworkActivity } from "../api/networkActivity/NetworkActivity";

export const NETWORKACTIVITY_TITLE_FIELD = "activityId";

export const NetworkActivityTitle = (record: TNetworkActivity): string => {
  return record.activityId?.toString() || String(record.id);
};

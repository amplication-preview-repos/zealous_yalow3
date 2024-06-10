import { SortOrder } from "../../util/SortOrder";

export type NetworkActivityOrderByInput = {
  activityData?: SortOrder;
  activityId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
};

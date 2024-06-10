import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  sessionId?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};

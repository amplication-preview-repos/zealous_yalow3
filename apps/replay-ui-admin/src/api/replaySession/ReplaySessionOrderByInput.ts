import { SortOrder } from "../../util/SortOrder";

export type ReplaySessionOrderByInput = {
  createdAt?: SortOrder;
  errorBars?: SortOrder;
  id?: SortOrder;
  replaySessionId?: SortOrder;
  session?: SortOrder;
  tabSwitchBars?: SortOrder;
  updatedAt?: SortOrder;
};

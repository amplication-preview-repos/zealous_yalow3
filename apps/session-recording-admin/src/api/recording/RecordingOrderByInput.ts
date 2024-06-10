import { SortOrder } from "../../util/SortOrder";

export type RecordingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  maskedFields?: SortOrder;
  recordingId?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
};

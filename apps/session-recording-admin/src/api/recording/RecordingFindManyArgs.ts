import { RecordingWhereInput } from "./RecordingWhereInput";
import { RecordingOrderByInput } from "./RecordingOrderByInput";

export type RecordingFindManyArgs = {
  where?: RecordingWhereInput;
  orderBy?: Array<RecordingOrderByInput>;
  skip?: number;
  take?: number;
};

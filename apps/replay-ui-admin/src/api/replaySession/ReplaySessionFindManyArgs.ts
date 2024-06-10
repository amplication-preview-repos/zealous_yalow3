import { ReplaySessionWhereInput } from "./ReplaySessionWhereInput";
import { ReplaySessionOrderByInput } from "./ReplaySessionOrderByInput";

export type ReplaySessionFindManyArgs = {
  where?: ReplaySessionWhereInput;
  orderBy?: Array<ReplaySessionOrderByInput>;
  skip?: number;
  take?: number;
};

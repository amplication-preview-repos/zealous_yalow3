import { NetworkActivityWhereInput } from "./NetworkActivityWhereInput";
import { NetworkActivityOrderByInput } from "./NetworkActivityOrderByInput";

export type NetworkActivityFindManyArgs = {
  where?: NetworkActivityWhereInput;
  orderBy?: Array<NetworkActivityOrderByInput>;
  skip?: number;
  take?: number;
};

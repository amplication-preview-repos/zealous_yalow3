import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type NetworkActivityCreateInput = {
  activityData?: InputJsonValue;
  activityId?: string | null;
  session?: SessionWhereUniqueInput | null;
};

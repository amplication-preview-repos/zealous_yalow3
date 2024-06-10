import { InputJsonValue } from "../../types";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type NetworkActivityUpdateInput = {
  activityData?: InputJsonValue;
  activityId?: string | null;
  session?: SessionWhereUniqueInput | null;
};

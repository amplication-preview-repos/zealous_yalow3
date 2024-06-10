import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type NetworkActivity = {
  activityData: JsonValue;
  activityId: string | null;
  createdAt: Date;
  id: string;
  session?: Session | null;
  updatedAt: Date;
};

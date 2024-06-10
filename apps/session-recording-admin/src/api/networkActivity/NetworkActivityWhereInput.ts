import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type NetworkActivityWhereInput = {
  activityData?: JsonFilter;
  activityId?: StringNullableFilter;
  id?: StringFilter;
  session?: SessionWhereUniqueInput;
};

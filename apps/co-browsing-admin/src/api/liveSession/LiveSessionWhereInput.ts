import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveSessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  liveSessionId?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};

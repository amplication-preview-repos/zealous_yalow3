import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NetworkActivityListRelationFilter } from "../networkActivity/NetworkActivityListRelationFilter";
import { RecordingListRelationFilter } from "../recording/RecordingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  networkActivities?: NetworkActivityListRelationFilter;
  recordings?: RecordingListRelationFilter;
  sessionId?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
};

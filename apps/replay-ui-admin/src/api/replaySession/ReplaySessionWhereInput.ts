import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReplaySessionWhereInput = {
  errorBars?: JsonFilter;
  id?: StringFilter;
  replaySessionId?: StringNullableFilter;
  session?: StringNullableFilter;
  tabSwitchBars?: JsonFilter;
};

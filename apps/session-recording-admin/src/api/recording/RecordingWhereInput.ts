import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type RecordingWhereInput = {
  id?: StringFilter;
  maskedFields?: JsonFilter;
  recordingId?: StringNullableFilter;
  session?: SessionWhereUniqueInput;
};

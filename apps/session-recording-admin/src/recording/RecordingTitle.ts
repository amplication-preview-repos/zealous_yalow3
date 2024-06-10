import { Recording as TRecording } from "../api/recording/Recording";

export const RECORDING_TITLE_FIELD = "recordingId";

export const RecordingTitle = (record: TRecording): string => {
  return record.recordingId?.toString() || String(record.id);
};

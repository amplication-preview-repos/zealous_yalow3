import { NetworkActivity } from "../networkActivity/NetworkActivity";
import { Recording } from "../recording/Recording";

export type Session = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  networkActivities?: Array<NetworkActivity>;
  recordings?: Array<Recording>;
  sessionId: string | null;
  startTime: Date | null;
  updatedAt: Date;
};

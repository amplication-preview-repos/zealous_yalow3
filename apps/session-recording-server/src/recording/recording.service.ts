import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecordingServiceBase } from "./base/recording.service.base";

@Injectable()
export class RecordingService extends RecordingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

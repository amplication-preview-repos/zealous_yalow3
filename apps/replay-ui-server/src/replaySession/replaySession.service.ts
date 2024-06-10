import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReplaySessionServiceBase } from "./base/replaySession.service.base";

@Injectable()
export class ReplaySessionService extends ReplaySessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

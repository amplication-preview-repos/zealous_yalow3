import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkActivityServiceBase } from "./base/networkActivity.service.base";

@Injectable()
export class NetworkActivityService extends NetworkActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

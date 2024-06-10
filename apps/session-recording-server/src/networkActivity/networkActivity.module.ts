import { Module } from "@nestjs/common";
import { NetworkActivityModuleBase } from "./base/networkActivity.module.base";
import { NetworkActivityService } from "./networkActivity.service";
import { NetworkActivityController } from "./networkActivity.controller";
import { NetworkActivityResolver } from "./networkActivity.resolver";

@Module({
  imports: [NetworkActivityModuleBase],
  controllers: [NetworkActivityController],
  providers: [NetworkActivityService, NetworkActivityResolver],
  exports: [NetworkActivityService],
})
export class NetworkActivityModule {}

import { Module } from "@nestjs/common";
import { ReplaySessionModuleBase } from "./base/replaySession.module.base";
import { ReplaySessionService } from "./replaySession.service";
import { ReplaySessionController } from "./replaySession.controller";
import { ReplaySessionResolver } from "./replaySession.resolver";

@Module({
  imports: [ReplaySessionModuleBase],
  controllers: [ReplaySessionController],
  providers: [ReplaySessionService, ReplaySessionResolver],
  exports: [ReplaySessionService],
})
export class ReplaySessionModule {}

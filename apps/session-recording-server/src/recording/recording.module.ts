import { Module } from "@nestjs/common";
import { RecordingModuleBase } from "./base/recording.module.base";
import { RecordingService } from "./recording.service";
import { RecordingController } from "./recording.controller";
import { RecordingResolver } from "./recording.resolver";

@Module({
  imports: [RecordingModuleBase],
  controllers: [RecordingController],
  providers: [RecordingService, RecordingResolver],
  exports: [RecordingService],
})
export class RecordingModule {}

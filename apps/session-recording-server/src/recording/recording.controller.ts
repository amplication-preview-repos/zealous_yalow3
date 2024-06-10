import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecordingService } from "./recording.service";
import { RecordingControllerBase } from "./base/recording.controller.base";

@swagger.ApiTags("recordings")
@common.Controller("recordings")
export class RecordingController extends RecordingControllerBase {
  constructor(protected readonly service: RecordingService) {
    super(service);
  }
}

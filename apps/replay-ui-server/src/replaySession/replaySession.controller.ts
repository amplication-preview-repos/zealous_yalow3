import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReplaySessionService } from "./replaySession.service";
import { ReplaySessionControllerBase } from "./base/replaySession.controller.base";

@swagger.ApiTags("replaySessions")
@common.Controller("replaySessions")
export class ReplaySessionController extends ReplaySessionControllerBase {
  constructor(protected readonly service: ReplaySessionService) {
    super(service);
  }
}

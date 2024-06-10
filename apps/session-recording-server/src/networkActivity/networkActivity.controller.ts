import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NetworkActivityService } from "./networkActivity.service";
import { NetworkActivityControllerBase } from "./base/networkActivity.controller.base";

@swagger.ApiTags("networkActivities")
@common.Controller("networkActivities")
export class NetworkActivityController extends NetworkActivityControllerBase {
  constructor(protected readonly service: NetworkActivityService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { NetworkActivityResolverBase } from "./base/networkActivity.resolver.base";
import { NetworkActivity } from "./base/NetworkActivity";
import { NetworkActivityService } from "./networkActivity.service";

@graphql.Resolver(() => NetworkActivity)
export class NetworkActivityResolver extends NetworkActivityResolverBase {
  constructor(protected readonly service: NetworkActivityService) {
    super(service);
  }
}

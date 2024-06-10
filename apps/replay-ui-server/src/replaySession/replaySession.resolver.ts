import * as graphql from "@nestjs/graphql";
import { ReplaySessionResolverBase } from "./base/replaySession.resolver.base";
import { ReplaySession } from "./base/ReplaySession";
import { ReplaySessionService } from "./replaySession.service";

@graphql.Resolver(() => ReplaySession)
export class ReplaySessionResolver extends ReplaySessionResolverBase {
  constructor(protected readonly service: ReplaySessionService) {
    super(service);
  }
}

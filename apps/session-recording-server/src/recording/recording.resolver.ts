import * as graphql from "@nestjs/graphql";
import { RecordingResolverBase } from "./base/recording.resolver.base";
import { Recording } from "./base/Recording";
import { RecordingService } from "./recording.service";

@graphql.Resolver(() => Recording)
export class RecordingResolver extends RecordingResolverBase {
  constructor(protected readonly service: RecordingService) {
    super(service);
  }
}

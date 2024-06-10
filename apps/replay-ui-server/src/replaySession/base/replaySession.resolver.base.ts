/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ReplaySession } from "./ReplaySession";
import { ReplaySessionCountArgs } from "./ReplaySessionCountArgs";
import { ReplaySessionFindManyArgs } from "./ReplaySessionFindManyArgs";
import { ReplaySessionFindUniqueArgs } from "./ReplaySessionFindUniqueArgs";
import { CreateReplaySessionArgs } from "./CreateReplaySessionArgs";
import { UpdateReplaySessionArgs } from "./UpdateReplaySessionArgs";
import { DeleteReplaySessionArgs } from "./DeleteReplaySessionArgs";
import { ReplaySessionService } from "../replaySession.service";
@graphql.Resolver(() => ReplaySession)
export class ReplaySessionResolverBase {
  constructor(protected readonly service: ReplaySessionService) {}

  async _replaySessionsMeta(
    @graphql.Args() args: ReplaySessionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ReplaySession])
  async replaySessions(
    @graphql.Args() args: ReplaySessionFindManyArgs
  ): Promise<ReplaySession[]> {
    return this.service.replaySessions(args);
  }

  @graphql.Query(() => ReplaySession, { nullable: true })
  async replaySession(
    @graphql.Args() args: ReplaySessionFindUniqueArgs
  ): Promise<ReplaySession | null> {
    const result = await this.service.replaySession(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ReplaySession)
  async createReplaySession(
    @graphql.Args() args: CreateReplaySessionArgs
  ): Promise<ReplaySession> {
    return await this.service.createReplaySession({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ReplaySession)
  async updateReplaySession(
    @graphql.Args() args: UpdateReplaySessionArgs
  ): Promise<ReplaySession | null> {
    try {
      return await this.service.updateReplaySession({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ReplaySession)
  async deleteReplaySession(
    @graphql.Args() args: DeleteReplaySessionArgs
  ): Promise<ReplaySession | null> {
    try {
      return await this.service.deleteReplaySession(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

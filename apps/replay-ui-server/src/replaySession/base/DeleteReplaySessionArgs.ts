/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReplaySessionWhereUniqueInput } from "./ReplaySessionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteReplaySessionArgs {
  @ApiProperty({
    required: true,
    type: () => ReplaySessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReplaySessionWhereUniqueInput)
  @Field(() => ReplaySessionWhereUniqueInput, { nullable: false })
  where!: ReplaySessionWhereUniqueInput;
}

export { DeleteReplaySessionArgs as DeleteReplaySessionArgs };

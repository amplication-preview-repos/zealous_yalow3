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
import { NetworkActivityWhereUniqueInput } from "./NetworkActivityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NetworkActivityUpdateInput } from "./NetworkActivityUpdateInput";

@ArgsType()
class UpdateNetworkActivityArgs {
  @ApiProperty({
    required: true,
    type: () => NetworkActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NetworkActivityWhereUniqueInput)
  @Field(() => NetworkActivityWhereUniqueInput, { nullable: false })
  where!: NetworkActivityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NetworkActivityUpdateInput,
  })
  @ValidateNested()
  @Type(() => NetworkActivityUpdateInput)
  @Field(() => NetworkActivityUpdateInput, { nullable: false })
  data!: NetworkActivityUpdateInput;
}

export { UpdateNetworkActivityArgs as UpdateNetworkActivityArgs };

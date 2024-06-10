/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { NetworkActivityListRelationFilter } from "../../networkActivity/base/NetworkActivityListRelationFilter";
import { RecordingListRelationFilter } from "../../recording/base/RecordingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class SessionWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => NetworkActivityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NetworkActivityListRelationFilter)
  @IsOptional()
  @Field(() => NetworkActivityListRelationFilter, {
    nullable: true,
  })
  networkActivities?: NetworkActivityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RecordingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecordingListRelationFilter)
  @IsOptional()
  @Field(() => RecordingListRelationFilter, {
    nullable: true,
  })
  recordings?: RecordingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sessionId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startTime?: DateTimeNullableFilter;
}

export { SessionWhereInput as SessionWhereInput };
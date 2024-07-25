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
import { AssistantWhereInput } from "./AssistantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssistantOrderByInput } from "./AssistantOrderByInput";

@ArgsType()
class AssistantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssistantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssistantWhereInput, { nullable: true })
  @Type(() => AssistantWhereInput)
  where?: AssistantWhereInput;

  @ApiProperty({
    required: false,
    type: [AssistantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssistantOrderByInput], { nullable: true })
  @Type(() => AssistantOrderByInput)
  orderBy?: Array<AssistantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AssistantFindManyArgs as AssistantFindManyArgs };

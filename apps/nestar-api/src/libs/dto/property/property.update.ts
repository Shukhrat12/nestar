import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min, isNotEmpty } from "class-validator";
import { MemberStatus } from "../../enums/member.enum";
import { ObjectId } from 'mongoose'
import { PropertyLocation, PropertyStatus, PropertyType } from "../../enums/property.enum";
import { Direction } from "../../enums/common.enum";

@InputType()
export class PropertyUpdate {
    @IsNotEmpty()
    @Field(() => String)
    _id: ObjectId;

    @IsOptional()
    @Field(() => PropertyType, { nullable: true })
    propertyType?: PropertyType;

    @IsOptional()
    @Field(() => PropertyStatus, { nullable: true })
    propertyStatus?: PropertyStatus;

    @IsOptional()
    @Field(() => PropertyLocation, { nullable: true })
    propertyLocation?: PropertyLocation;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, { nullable: true })
    propertyAddress?: string;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, { nullable: true })
    propertyTitle?: string;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertyPrice?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertySquare?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field(() => Number, { nullable: true })
    propertyBeds?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field(() => Number, { nullable: true })
    propertyRooms?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertyViews?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertyLikes?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertyComments?: number;

    @IsOptional()
    @Field(() => Number, { nullable: true })
    propertyRank?: number;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    propertyImages?: string[];

    @IsOptional()
    @Length(5, 500)
    @Field(() => String, { nullable: true })
    propertyDesc?: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    propertyBarter?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    propertyRent?: boolean;

    soldAt?: Date;

    deletedAt?: Date;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    constructedAt?: Date;
}


import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { PropertyLocation, PropertyStatus, PropertyType } from "../../enums/property.enum";
import { Member, TotalCounter } from "../member/member";
import { MeLiked } from "../like/like";

@ObjectType()
export class Property {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => PropertyType)
    propertyType: PropertyType;

    @Field(() => PropertyStatus)
    propertyStatus: PropertyStatus;

    @Field(() => PropertyLocation)
    propertyLocation: PropertyLocation;

    @Field(() => String)
    propertyAddress: string;

    @Field(() => String)
    propertyTitle: string;

    @Field(() => Number)
    propertyPrice: number;

    @Field(() => Number)
    propertySquare: number;

    @Field(() => Number)
    propertyBeds: number;

    @Field(() => Number)
    propertyRooms: number;

    @Field(() => Number)
    propertyViews: number;

    @Field(() => Number)
    propertyLikes: number;

    @Field(() => Number)
    propertyComments: number;

    @Field(() => Number)
    propertyRank: number;

    @Field(() => [String])
    propertyImages: string[];

    @Field(() => String, { nullable: true })
    propertyDesc?: string;

    @Field(() => Boolean)
    propertyBarter: boolean;

    @Field(() => Boolean)
    propertyRent: boolean;

    @Field(() => String)
    memberId: ObjectId;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

    @Field(() => Date, { nullable: true })
    soldAt?: Date;

    @Field(() => Date, { nullable: true })
    deletedAt?: Date;

    @Field(() => Date, { nullable: true })
    constructedAt?: Date;

    /** from aggregation **/
    @Field(() => Member, { nullable: true })
    memberData?: Member;

    @Field(() => [MeLiked], { nullable: true })
    meLiked?: MeLiked[]
}

@ObjectType()
export class Properties {
    @Field(() => [Property])
    list: Property[];

    @Field(() => [TotalCounter], { nullable: true })
    metaCounter: TotalCounter[]
}
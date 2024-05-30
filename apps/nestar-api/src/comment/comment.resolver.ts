import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../components/auth/guards/auth.guard';
import { CommentInput, CommentsInquiry } from '../libs/dto/comment/comment.input';
import { AuthMember } from '../components/auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Comment, Comments } from '../libs/dto/comment/comment'
import { shapeIntoMongoObjectId } from '../libs/config';
import { CommentUpdate } from '../libs/dto/comment/comment.update';
import { WithoutGuard } from '../components/auth/guards/without.guard';

@Resolver()
export class CommentResolver {
    constructor(private readonly commentService: CommentService) { }

    @UseGuards(AuthGuard)
    @Mutation(() => Comment)
    public async createComment(
        @Args('input') input: CommentInput,
        @AuthMember('_id') memberId: ObjectId
    ): Promise<Comment> {
        console.log("Mutation: createComment")
        return await this.commentService.createComment(memberId, input);
    }

    @UseGuards(AuthGuard)
    @Mutation(() => Comment)
    public async updateComment(
        @Args('input') input: CommentUpdate,
        @AuthMember('_id') memberId: ObjectId): Promise<Comment> {
        console.log('Mutation: updateComment')
        input._id = shapeIntoMongoObjectId(input._id)
        return await this.commentService.updateComment(memberId, input)
    }

    @UseGuards(WithoutGuard)
    @Query(() => Comments)
    public async getComments(
        @Args('input') input: CommentsInquiry,
        @AuthMember('_id') memberId: ObjectId
    ): Promise<Comments> {
        console.log('Query: getComments')
        input.search.commentRefId = shapeIntoMongoObjectId(input.search.commentRefId);
        const result = await this.commentService.getComment(memberId, input);
        return result;
    }

}
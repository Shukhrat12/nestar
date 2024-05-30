import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../components/auth/guards/auth.guard';
import { CommentInput } from '../libs/dto/comment/comment.input';
import { AuthMember } from '../components/auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Comments, Comment } from '../libs/dto/comment/comment'

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

}

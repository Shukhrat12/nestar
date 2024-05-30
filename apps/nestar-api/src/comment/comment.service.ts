import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentInput } from '../libs/dto/comment/comment.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { MemberService } from '../components/member/member.service';
import { Message } from '../libs/enums/common.enum';
import { PropertyService } from '../components/property/property.service';
import { BoardArticleService } from '../components/board-article/board-article.service';
import { CommentGroup } from '../libs/enums/comment.enum';

@Injectable()
export class CommentService {

    constructor(
        @InjectModel('Comment')
        private readonly commentModel: Model<Comment>,
        private readonly memberService: MemberService,
        private readonly propertyService: PropertyService,
        private readonly boardArticleService: BoardArticleService,
    ) { }

    public async createComment(memberId: ObjectId, input: CommentInput): Promise<Comment> {
        input.memberId = memberId;

        let result = null;

        try {
            result = await this.commentModel.create(input);
        } catch (error) {
            console.log('Error, commentModel: ', error)
            throw new BadRequestException(Message.CREATE_FAILED)
        }

        switch (input.commentGroup) {
            case CommentGroup.PROPERTY:
                await this.propertyService.propertyStatsEditor({
                    _id: input.commentRefId,
                    targetKey: 'propertyComments',
                    modifier: 1
                })
                break;
            case CommentGroup.ARTICLE:
                await this.boardArticleService.boardArticleStatsEditor({
                    _id: input.commentRefId,
                    targetKey: 'propertyComments',
                    modifier: 1
                })
                break;

            case CommentGroup.MEMBER:
                await this.memberService.memberStatsEditor({
                    _id: input.commentRefId,
                    targetKey: 'memberComments',
                    modifier: 1
                })
                break;
        }

        return result;
    }
}

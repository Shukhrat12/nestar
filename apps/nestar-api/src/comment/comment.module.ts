import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import CommentSchema from '../schemas/Comment.model';
import { AuthModule } from '../components/auth/auth.module';
import { MemberModule } from '../components/member/member.module';
import { PropertyModule } from '../components/property/property.module';
import { BoardArticleModule } from '../components/board-article/board-article.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Comment",
        schema: CommentSchema
      }
    ]),
    AuthModule,
    PropertyModule,
    MemberModule,
    BoardArticleModule
  ],
  providers: [CommentResolver, CommentService],
  exports: []
})
export class CommentModule { }

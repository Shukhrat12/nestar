import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Like } from '../../libs/dto/like/like';
import { InjectModel } from '@nestjs/mongoose';
import { LikeInput } from '../../libs/dto/like/like.input';
import { T } from '../../libs/types/common';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class LikeService {
    constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) { }

    public async likeToggle(input: LikeInput): Promise<number> {
        const search: T = { memberId: input.memberId, likeRefId: input.likeRefId },
            exist = await this.likeModel.findOne(search).exec();
        let modifier = 1;

        if (exist) {
            await this.likeModel.findOneAndDelete(search).exec();
            modifier = -1;
        } else {
            try {
                await this.likeModel.create(input);
            } catch (error) {
                console.log("Error, Service.model: ", error.message)
                throw new BadRequestException(Message.CREATE_FAILED);
            }
        }

        console.log(`- LikeModifier: ${modifier} -`)
        return modifier;
    }

}

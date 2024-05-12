import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';

@Resolver()
export class MemberResolver {
    constructor(private readonly memberService: MemberService) { }

    @Mutation(() => String)
    @UsePipes(ValidationPipe)
    public async signup(@Args("input") input: MemberInput): Promise<String> {
        console.log("Mutation: signup")
        console.log("input: ", input)
        return this.memberService.signup();
    }

    @Mutation(() => String)
    @UsePipes(ValidationPipe)
    public async login(@Args("input") input: LoginInput): Promise<String> {
        console.log("Mutation: signup")
        return this.memberService.getMember();
    }

    @Mutation(() => String)
    public async updateMember(): Promise<String> {
        console.log("Mutation: signup")
        return this.memberService.updateMember();
    }

    @Query(() => String)
    public async getMember(): Promise<string> {
        console.log('Query: getMember');
        return this.memberService.getMember();
    }

}

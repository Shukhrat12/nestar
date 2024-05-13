import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
    constructor(private readonly memberService: MemberService) { }

    @Mutation(() => Member)
    @UsePipes(ValidationPipe)
    public async signup(@Args("input") input: MemberInput): Promise<Member> {
        try {
            console.log("Mutation: signup")
            console.log("input: ", input)
            return this.memberService.signup(input);
        } catch (error) {
            console.log("Error, signup: ", error)
            throw new InternalServerErrorException;
        }
    }

    @Mutation(() => Member)
    @UsePipes(ValidationPipe)
    public async login(@Args("input") input: LoginInput): Promise<Member> {
        try {
            console.log("Mutation: login")
            return this.memberService.login(input);
        } catch (error) {
            console.log("Error, signup: ", error)
            throw new InternalServerErrorException;
        }
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

import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
    constructor(private readonly memberService: MemberService) { }

    @Mutation(() => String)
    public async signup(): Promise<String> {
        console.log("Mutation: signup")
        return this.memberService.signup();
    }

    @Mutation(() => String)
    public async login(): Promise<String> {
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

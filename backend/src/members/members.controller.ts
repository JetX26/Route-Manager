import { Body, Controller, Get, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { member } from '@prisma/client';
import { ZodService } from 'src/zod/zod.service';

@Controller('members')
export class MembersController {
  constructor(
    private readonly membersService: MembersService,
    private readonly zodService: ZodService,
  ) {}

  @Post('createMember')
  async createMember(@Body() body: member) {
    console.log(await this.membersService.createMember(body));
    return await this.membersService.createMember(body);
  }

  @Post('findMember')
  async findMember(@Body() body: { clerkId: string }) {
    if (this.zodService.validateClerkId(body.clerkId)) {
      return await this.membersService.findMember(body.clerkId);
    } else {
      return { success: false, error: 'Failed to validate data' };
    }
  }
}

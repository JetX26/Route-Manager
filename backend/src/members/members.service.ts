import { Injectable } from '@nestjs/common';
import { member } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  // Creates a new Member
  async createMember(memberDetails: member) {
    try {
      if (
        !memberDetails.firstName ||
        !memberDetails.lastName ||
        !memberDetails.clerkId
      ) {
        return {
          success: false,
          error: 'Insufficient data to create new Member',
        };
      } else {
        const newMember = await this.prisma.member.create({
          data: {
            ...memberDetails,
          },
        });
        if (!newMember) {
          return { success: false };
        } else {
          console.log(newMember);
          return { success: true, data: newMember };
        }
      }
    } catch (error) {
      return { success: false, error: error };
    }
  }

  // Searches for a specific Member using their Clerk ID
  async findMember(clerkId: string) {
    try {
      const member = await this.prisma.member.findFirst({ where: { clerkId } });
      if (!member) {
        return { success: false, error: 'Failed to create member' };
      } else {
        console.log(member);
        return { success: true, data: member };
      }
    } catch (error) {
      return { success: false, error: error };
    }
  }
}

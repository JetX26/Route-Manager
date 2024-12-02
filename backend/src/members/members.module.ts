import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZodService } from 'src/zod/zod.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService, PrismaService, ZodService],
})
export class MembersModule {}

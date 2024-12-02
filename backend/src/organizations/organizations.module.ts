import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { ZodService } from 'src/zod/zod.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, ZodService, PrismaService],
})
export class OrganizationsModule {}

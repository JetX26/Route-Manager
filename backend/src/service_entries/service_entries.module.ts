import { Module } from '@nestjs/common';
import { ServiceEntriesService } from './service_entries.service';
import { ServiceEntriesController } from './service_entries.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZodService } from 'src/zod/zod.service';

@Module({
  controllers: [ServiceEntriesController],
  providers: [ServiceEntriesService, PrismaService, ZodService],
})
export class ServiceEntriesModule {}

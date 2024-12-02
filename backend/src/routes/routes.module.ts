import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZodService } from 'src/zod/zod.service';

@Module({
  controllers: [RoutesController],
  providers: [RoutesService, PrismaService, ZodService],
})
export class RoutesModule {}

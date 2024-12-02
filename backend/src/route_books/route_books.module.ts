import { Module } from '@nestjs/common';
import { RouteBooksService } from './route_books.service';
import { RouteBooksController } from './route_books.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RouteBooksController],
  providers: [RouteBooksService, PrismaService],
})
export class RouteBooksModule {}

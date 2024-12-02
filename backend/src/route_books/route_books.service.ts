import { Injectable } from '@nestjs/common';
import { routeBook } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RouteBooksService {
  constructor(private readonly prismaService: PrismaService) {}
  async createRouteBook(assignTo: string) {
    try {
      const newRouteBook = await this.prismaService.routeBook.create({});
      if (!newRouteBook) {
        return { success: false, error: 'Failed to create Routebook' };
      }
      const assignRouteBook = await this.prismaService.member.update({
        where: { id: assignTo },
        data: { routeBookId: newRouteBook.id },
      });
      if (!assignRouteBook) {
        return { success: false, error: 'Failed to assign Routebook' };
      } else {
        return { success: true, data: newRouteBook };
      }
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }
}

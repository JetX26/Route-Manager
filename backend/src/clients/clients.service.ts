import { Injectable } from '@nestjs/common';
import { client } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}
  async createClient({
    routeNumber,
    clientFirstName,
    clientLastName,
    clientContact,
    address,
    routeId,
  }: client) {
    try {
      const newClient = await this.prisma.client.create({
        data: {
          routeNumber,
          clientFirstName,
          clientLastName,
          clientContact,
          address,
          routeId,
        },
      });
      if (!newClient) {
        return { success: false, error: 'Failed to create new client' };
      }
      return { success: true, data: newClient };
    } catch (error) {
      return { success: false, error };
    }
  }
}

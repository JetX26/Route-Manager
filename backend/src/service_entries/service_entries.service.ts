import { Injectable } from '@nestjs/common';
import { serviceEntry } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceEntriesService {
  constructor(private prisma: PrismaService) {}
  async createNewEntry({
    type,
    totalAlkalinity,
    chlorine,
    ph,
    calcium,
    cya,
    salt,
    chemsAdded,
    clientId,
    date,
  }: serviceEntry) {
    try {
      const newServiceEntry = await this.prisma.serviceEntry.create({
        data: {
          type,
          totalAlkalinity,
          chlorine,
          ph,
          calcium,
          cya,
          salt,
          chemsAdded,
          clientId,
          date,
        },
      });
      if (!newServiceEntry) {
        return { success: false, error: 'Failed to create new Service Entry' };
      } else {
        return { success: true, data: newServiceEntry };
      }
    } catch (error) {
      return { success: false, error: error };
    }
  }
}

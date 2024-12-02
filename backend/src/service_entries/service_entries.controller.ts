import { Body, Controller, Post } from '@nestjs/common';
import { ServiceEntriesService } from './service_entries.service';
import { serviceEntry } from '@prisma/client';
import { ZodService } from 'src/zod/zod.service';

@Controller('service-entries')
export class ServiceEntriesController {
  constructor(
    private readonly serviceEntriesService: ServiceEntriesService,
    private readonly zodService: ZodService,
  ) {}

  @Post()
  createServiceEntry(@Body() body: serviceEntry) {
    if (!this.zodService.validateServiceEntry(body)) {
      return { success: false, error: 'Failed to validate service details' };
    } else {
      return this.serviceEntriesService.createNewEntry(body);
    }
  }
}

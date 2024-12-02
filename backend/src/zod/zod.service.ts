import { Injectable } from '@nestjs/common';
import { organization, serviceEntry } from '@prisma/client';
import z, { ZodObject } from 'zod';

@Injectable()
export class ZodService {
  validateOrganization(data: organization) {
    const orgSchema = z.object({
      name: z.string().min(1).max(30),
      orgType: z.string().min(1).max(15),
    });

    return orgSchema.safeParse(data).success;
  }

  validateId(data: string) {
    const idSchema = z.string().length(24);

    return idSchema.safeParse(data).success;
  }

  validateClerkId(data: string) {
    const clerkIdSchema = z.string().length(32);

    return clerkIdSchema.safeParse(data).success;
  }

  validateServiceEntry(data: serviceEntry) {
    const serviceEntrySchema = z.object({
      type: z.string().min(0).max(25),
      totalAlkalinity: z.number().min(0).max(400).describe('0-400'),
      chlorine: z.number().min(0).max(10).describe('0-10'),
      ph: z.number().min(7).max(8).describe('7-8'),
      calcium: z.number().min(0).max(1000).optional().describe('0-1000'),
      cya: z.number().min(0).max(100).optional().describe('0-100'),
      salt: z.number().min(0).max(10000).optional().describe('0-10000'),
      clientId: z.string().length(24),
    });

    return serviceEntrySchema.safeParse(data).success;
  }

  validateName(data: string) {
    const nameSchema = z.string().min(0).max(25);

    return nameSchema.safeParse(data).success;
  }
}

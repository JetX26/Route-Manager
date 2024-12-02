import { Body, Controller, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { organization } from '@prisma/client';
import { ZodService } from 'src/zod/zod.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(
    private readonly organizationsService: OrganizationsService,
    private readonly zodService: ZodService,
  ) {}

  @Post('createOrg')
  createOrg(@Body() body: { org: organization; ownerId: string }) {
    const { org } = body;
    if (
      this.zodService.validateOrganization(org) &&
      this.zodService.validateId(org.owner)
    ) {
      return this.organizationsService.createOrg(org);
    } else {
      return { success: false, error: 'Data Validation failed' };
    }
  }

  @Post('findOrg')
  findOrg(@Body() body: { orgId: string }) {
    const { orgId } = body;
    console.log(orgId);
    if (this.zodService.validateId(orgId)) {
      return this.organizationsService.findOrg(orgId);
    } else {
      return { success: false, error: 'Data Validation failed' };
    }
  }
}

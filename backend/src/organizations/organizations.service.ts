import { Injectable } from '@nestjs/common';
import { member, organization } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}

  // Creates a new Organization using the members DB ID
  async createOrg(org: organization) {
    try {
      const newOrg = await this.prisma.organization.create({
        data: { name: org.name, orgType: org.orgType, owner: org.owner },
      });
      const owner = await this.prisma.member.findFirst({
        where: { id: org.owner },
      });
      if (newOrg && owner) {
        const addOrgToMember = await this.prisma.member.update({
          where: { id: org.owner },
          data: { organizations: [...owner.organizations, newOrg.id] },
        });
        if (addOrgToMember) {
          console.log(newOrg);
          return { success: true, data: newOrg };
        } else {
          return { success: false, error: 'Failed to create new org' };
        }
      }
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async findOrg(orgId: string) {
    try {
      const org = await this.prisma.organization.findFirst({
        where: { id: orgId },
      });
      if (!org) {
        return { success: false, error: 'Failed to find organization' };
      } else {
        return { success: true, data: org };
      }
    } catch (error) {
      return { success: false, error: error };
    }
  }
}

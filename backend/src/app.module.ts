import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { MembersModule } from './members/members.module';
import { ServiceEntriesModule } from './service_entries/service_entries.module';
import { WorkOrdersModule } from './work_orders/work_orders.module';
import { RouteBooksModule } from './route_books/route_books.module';
import { PrismaService } from './prisma/prisma.service';
import { ZodService } from './zod/zod.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    RoutesModule,
    OrganizationsModule,
    MembersModule,
    ServiceEntriesModule,
    WorkOrdersModule,
    RouteBooksModule,
    ClientsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, ZodService],
})
export class AppModule {}

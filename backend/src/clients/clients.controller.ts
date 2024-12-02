import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { client } from '@prisma/client';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  createClient(@Body() body: client) {
    return this.clientsService.createClient(body);
  }
}

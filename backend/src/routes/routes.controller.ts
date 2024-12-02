import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { ZodService } from 'src/zod/zod.service';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly routesService: RoutesService,
    private readonly zodService: ZodService,
  ) {}

  @Post()
  createRoute(@Body() body: { name: string }) {
    if (!this.zodService.validateName(body.name)) {
      return { success: false, error: 'Data failed validation' };
    } else {
      return this.routesService.createRoute(body.name);
    }
  }
}

import { Controller } from '@nestjs/common';
import { WorkOrdersService } from './work_orders.service';

@Controller('work-orders')
export class WorkOrdersController {
  constructor(private readonly workOrdersService: WorkOrdersService) {}
}

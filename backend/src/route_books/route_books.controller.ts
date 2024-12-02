import { Controller } from '@nestjs/common';
import { RouteBooksService } from './route_books.service';

@Controller('route-books')
export class RouteBooksController {
  constructor(private readonly routeBooksService: RouteBooksService) {}
}

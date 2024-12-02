import { Test, TestingModule } from '@nestjs/testing';
import { RouteBooksController } from './route_books.controller';
import { RouteBooksService } from './route_books.service';

describe('RouteBooksController', () => {
  let controller: RouteBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteBooksController],
      providers: [RouteBooksService],
    }).compile();

    controller = module.get<RouteBooksController>(RouteBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

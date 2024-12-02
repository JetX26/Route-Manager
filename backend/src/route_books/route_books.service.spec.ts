import { Test, TestingModule } from '@nestjs/testing';
import { RouteBooksService } from './route_books.service';

describe('RouteBooksService', () => {
  let service: RouteBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteBooksService],
    }).compile();

    service = module.get<RouteBooksService>(RouteBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

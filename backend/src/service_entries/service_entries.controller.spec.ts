import { Test, TestingModule } from '@nestjs/testing';
import { ServiceEntriesController } from './service_entries.controller';
import { ServiceEntriesService } from './service_entries.service';

describe('ServiceEntriesController', () => {
  let controller: ServiceEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceEntriesController],
      providers: [ServiceEntriesService],
    }).compile();

    controller = module.get<ServiceEntriesController>(ServiceEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

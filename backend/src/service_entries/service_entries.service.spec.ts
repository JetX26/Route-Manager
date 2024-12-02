import { Test, TestingModule } from '@nestjs/testing';
import { ServiceEntriesService } from './service_entries.service';

describe('ServiceEntriesService', () => {
  let service: ServiceEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceEntriesService],
    }).compile();

    service = module.get<ServiceEntriesService>(ServiceEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

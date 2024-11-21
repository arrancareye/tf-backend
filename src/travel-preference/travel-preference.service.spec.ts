import { Test, TestingModule } from '@nestjs/testing';
import { TravelPreferenceService } from './travel-preference.service';

describe('TravelPreferenceService', () => {
  let service: TravelPreferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelPreferenceService],
    }).compile();

    service = module.get<TravelPreferenceService>(TravelPreferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

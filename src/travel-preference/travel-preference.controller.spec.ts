import { Test, TestingModule } from '@nestjs/testing';
import { TravelPreferenceController } from './travel-preference.controller';
import { TravelPreferenceService } from './travel-preference.service';

describe('TravelPreferenceController', () => {
  let controller: TravelPreferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelPreferenceController],
      providers: [TravelPreferenceService],
    }).compile();

    controller = module.get<TravelPreferenceController>(TravelPreferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

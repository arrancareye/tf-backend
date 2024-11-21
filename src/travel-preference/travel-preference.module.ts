import { Module } from '@nestjs/common';
import { TravelPreferenceService } from './travel-preference.service';
import { TravelPreferenceController } from './travel-preference.controller';

@Module({
  controllers: [TravelPreferenceController],
  providers: [TravelPreferenceService],
})
export class TravelPreferenceModule {}

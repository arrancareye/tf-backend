import { Module } from '@nestjs/common';
import { TravelPreferenceService } from './travel-preference.service';
import { TravelPreferenceController } from './travel-preference.controller';
import { Destination } from 'src/destination/entities/destination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Destination])],
  controllers: [TravelPreferenceController],
  providers: [TravelPreferenceService],
})
export class TravelPreferenceModule {}

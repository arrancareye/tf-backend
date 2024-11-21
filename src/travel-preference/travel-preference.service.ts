import { Injectable } from '@nestjs/common';
import { CreateTravelPreferenceDto } from './dto/create-travel-preference.dto';
import { UpdateTravelPreferenceDto } from './dto/update-travel-preference.dto';

@Injectable()
export class TravelPreferenceService {
  create(createTravelPreferenceDto: CreateTravelPreferenceDto) {
    return 'This action adds a new travelPreference';
  }

  findAll() {
    return `This action returns all travelPreference`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travelPreference`;
  }

  update(id: number, updateTravelPreferenceDto: UpdateTravelPreferenceDto) {
    return `This action updates a #${id} travelPreference`;
  }

  remove(id: number) {
    return `This action removes a #${id} travelPreference`;
  }
}

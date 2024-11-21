import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TravelPreferenceService } from './travel-preference.service';
import { CreateTravelPreferenceDto } from './dto/create-travel-preference.dto';
import { UpdateTravelPreferenceDto } from './dto/update-travel-preference.dto';

@Controller('travel-preference')
export class TravelPreferenceController {
  constructor(private readonly travelPreferenceService: TravelPreferenceService) {}

  @Post()
  create(@Body() createTravelPreferenceDto: CreateTravelPreferenceDto) {
    return this.travelPreferenceService.create(createTravelPreferenceDto);
  }

  @Get()
  findAll() {
    return this.travelPreferenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelPreferenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTravelPreferenceDto: UpdateTravelPreferenceDto) {
    return this.travelPreferenceService.update(+id, updateTravelPreferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelPreferenceService.remove(+id);
  }
}

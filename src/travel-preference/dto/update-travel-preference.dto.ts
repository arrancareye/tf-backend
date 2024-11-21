import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelPreferenceDto } from './create-travel-preference.dto';

export class UpdateTravelPreferenceDto extends PartialType(CreateTravelPreferenceDto) {}

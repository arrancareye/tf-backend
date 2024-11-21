import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { TravelPreference } from '../../travel-preference/entities/travel-preference.entity';

@Entity()
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 0 })
  popularity: number; // Can store number of users who chose this destination

  @ManyToMany(() => TravelPreference, preference => preference.destinations)
  preferences: TravelPreference[];
}

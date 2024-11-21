import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Destination } from '../../destination/entities/destination.entity';

@Entity()
export class TravelPreference {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.preferences)
  user: User;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToMany(() => Destination, destination => destination.preferences)
  @JoinTable()
  destinations: Destination[];
}

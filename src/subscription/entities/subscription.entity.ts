import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.subscriptions)
  user: User; // Reference to the user with this subscription

  @Column({ type: 'enum', enum: ['basic', 'premium'], default: 'basic' })
  type: string; // Subscription type (e.g., basic, premium)

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'float', default: 0 })
  amountPaid: number; // The amount paid for this subscription
}

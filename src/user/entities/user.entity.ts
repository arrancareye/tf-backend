import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Profile } from '../../profile/entities/profile.entity';
import { TravelPreference } from '../../travel-preference/entities/travel-preference.entity';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { Chat } from '../../chat/entities/chat.entity';
import { Message } from '../../message/entities/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToOne(() => Profile, profile => profile.user, { cascade: true, nullable: true })
  profile: Profile;

  @OneToMany(() => TravelPreference, preference => preference.user, { cascade: true, nullable: true })
  preferences: TravelPreference[];

  @OneToMany(() => Subscription, subscription => subscription.user, { cascade: true, nullable: true })
  subscriptions: Subscription[];

  @OneToMany(() => Chat, chat => chat.initiator, { cascade: true, nullable: true })
  chatsInitiated: Chat[]; // Chats this user has initiated

  @OneToMany(() => Chat, chat => chat.receiver, { cascade: true, nullable: true })
  chatsReceived: Chat[]; // Chats this user has received

  @OneToMany(() => Message, message => message.sender, { cascade: true, nullable: true })
  sentMessages: Message[];
}

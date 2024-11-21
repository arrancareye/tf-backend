import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Chat } from '../../chat/entities/chat.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chat, chat => chat.messages)
  chat: Chat; // The chat this message belongs to

  @ManyToOne(() => User, user => user.sentMessages)
  sender: User; // The user who sent the message

  @Column({ type: 'text' })
  content: string; // The message content

  @CreateDateColumn()
  createdAt: Date; // When the message was sent
}

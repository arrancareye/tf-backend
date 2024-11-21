import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Message } from '../../message/entities/message.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.chatsInitiated)
  initiator: User; // The user who initiated the chat

  @ManyToOne(() => User, user => user.chatsReceived)
  receiver: User; // The user who received the chat

  @OneToMany(() => Message, message => message.chat)
  messages: Message[]; // The list of messages in this chat

  @CreateDateColumn()
  createdAt: Date;
}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { Message } from 'src/message/entities/message.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { TravelPreference } from 'src/travel-preference/entities/travel-preference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, TravelPreference, Profile, Subscription, Chat, Message])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

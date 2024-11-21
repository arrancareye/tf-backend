import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DestinationModule } from './destination/destination.module';
import { User } from './user/entities/user.entity';
import { Profile } from './profile/entities/profile.entity';
import { ProfileModule } from './profile/profile.module';
import { TravelPreferenceModule } from './travel-preference/travel-preference.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { Chat } from './chat/entities/chat.entity';
import { Destination } from './destination/entities/destination.entity';
import { Message } from './message/entities/message.entity';
import { TravelPreference } from './travel-preference/entities/travel-preference.entity';
import { Subscription } from './subscription/entities/subscription.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (
        {
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [
          User, 
          Profile, 
          Destination, 
          TravelPreference, 
          Subscription, 
          Message, 
          Chat
        ],
        synchronize: true,
      }),
    }),
    UserModule,
    DestinationModule,
    ProfileModule,
    TravelPreferenceModule,
    SubscriptionModule,
    ChatModule,
    MessageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

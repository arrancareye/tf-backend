import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DestinationModule } from './destination/destination.module';
import { ProfileModule } from './profile/profile.module';
import { TravelPreferenceModule } from './travel-preference/travel-preference.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
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

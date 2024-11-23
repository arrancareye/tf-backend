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
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getDatabaseConfig } from './config/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => getDatabaseConfig(configService) as TypeOrmModuleOptions,
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

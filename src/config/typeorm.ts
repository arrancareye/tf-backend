import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/entities/user.entity';
import * as path from 'path';
import { Profile } from 'src/profile/entities/profile.entity';
import { TravelPreference } from 'src/travel-preference/entities/travel-preference.entity';
import { Destination } from 'src/destination/entities/destination.entity';
import { Subscription } from 'src/subscription/entities/subscription.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { Message } from 'src/message/entities/message.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const getDatabaseConfig = (configService?: ConfigService): TypeOrmModuleOptions | DataSourceOptions => {
  const useConfigService = !!configService; // Check if ConfigService is provided (for NestJS runtime)
  return {
    type: 'postgres',
    host: useConfigService ? configService.get<string>('DB_HOST') : process.env.DB_HOST,
    port: useConfigService
      ? configService.get<number>('DB_PORT')
      : parseInt(process.env.DB_PORT || '5432', 10),
    username: useConfigService ? configService.get<string>('DB_USERNAME') : process.env.DB_USERNAME,
    password: useConfigService ? configService.get<string>('DB_PASSWORD') : process.env.DB_PASSWORD,
    database: useConfigService ? configService.get<string>('DB_NAME') : process.env.DB_NAME,
    entities: [
        User,
        Profile,      
        TravelPreference,  
        Destination,
        Subscription,
        Chat,
        Message,
    ],
    synchronize: false,
    migrations: [
        process.env.NODE_ENV === 'production'
          ? path.join(__dirname, '/../migrations/*.js') // Compiled JS files in dist/
          : path.join(__dirname, '/../migrations/*.ts'), // TS files in src/
    ],
    migrationsTableName: 'migrations',
    logging: true,
  };
};

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { Users } from './users/users.entity';
import { LscModule } from './lsc/lsc.module';
import { LSC } from './lsc/lsc.entity';
import { BtcModule } from './btc/btc.module';
import { BTC } from './btc/btc.entity';
import { HistoryModule } from './history/history.module';
import { History } from './history/history.entity';

dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Users, LSC, BTC, History],
      autoLoadEntities: true,
      synchronize: true  //use in development only
    }),
    UsersModule,
    LscModule,
    BtcModule,
    HistoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

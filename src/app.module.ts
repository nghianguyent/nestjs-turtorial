import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from './../config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'config/config';

@Module({
  imports: [AppConfig, MongooseModule.forRoot(config().db.mongodb.host)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

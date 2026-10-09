import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TaskModule } from './task/task.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      entities: [Task],
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: true
    }),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

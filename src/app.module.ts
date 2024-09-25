import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { useFactory } from '@config/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RootModule } from '@root/root.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: useFactory,
    }),
    RootModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

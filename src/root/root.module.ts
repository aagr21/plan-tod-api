import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AccessedFileLog,
  Credential,
  Directory,
  Institution,
} from '@root/models/entities';
import { AuthController, DirectoriesController } from '@root/controllers';
import { AuthService, DirectoriesService } from '@root/services';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AccessedFilesLogsService } from './services/accessed-files-logs.service';
import { AccessedFilesLogsController } from './controllers/accessed-files-logs.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Credential,
      Directory,
      Institution,
      AccessedFileLog,
    ]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    AuthController,
    DirectoriesController,
    AccessedFilesLogsController,
  ],
  providers: [AuthService, DirectoriesService, AccessedFilesLogsService],
})
export class RootModule {}

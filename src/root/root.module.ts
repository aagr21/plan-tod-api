import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credential, Directory, Institution } from '@root/models/entities';
import { AuthController, DirectoriesController } from '@root/controllers';
import { AuthService, DirectoriesService } from '@root/services';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Credential, Directory, Institution]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController, DirectoriesController],
  providers: [AuthService, DirectoriesService],
})
export class RootModule {}

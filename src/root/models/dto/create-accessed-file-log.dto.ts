import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccessedFileLogDto {
  @IsNotEmpty()
  @IsString()
  accessedDevice: string;

  @IsNotEmpty()
  @IsString()
  accessedIp: string;

  @IsNotEmpty()
  @IsString()
  accessedBrowser: string;

  @IsNotEmpty()
  @IsNumber()
  institutionId: number;

  @IsNotEmpty()
  @IsNumber()
  directoryId: number;
}

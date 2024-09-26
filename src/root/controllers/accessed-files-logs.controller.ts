import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@root/guards';
import { CreateAccessedFileLogDto } from '@root/models/dto';
import { AccessedFilesLogsService } from '@root/services';

@UseGuards(AuthGuard)
@Controller('accessed-files-logs')
export class AccessedFilesLogsController {
  constructor(
    private readonly accessedFilesLogsService: AccessedFilesLogsService,
  ) {}

  @Post()
  async create(@Body() createAccessedFileLogDto: CreateAccessedFileLogDto) {
    return this.accessedFilesLogsService.create(createAccessedFileLogDto);
  }
}

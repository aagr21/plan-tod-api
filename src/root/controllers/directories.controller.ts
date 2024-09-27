import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@root/guards';
import { DirectoriesService } from '@root/services';

@UseGuards(AuthGuard)
@Controller('directories')
export class DirectoriesController {
  constructor(private readonly directoriesService: DirectoriesService) {}

  @Get()
  async findAll() {
    return this.directoriesService.findAll();
  }
}

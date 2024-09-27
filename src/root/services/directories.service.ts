import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Directory } from '@root/models/entities';
import { TreeRepository } from 'typeorm';

@Injectable()
export class DirectoriesService {
  constructor(
    @InjectRepository(Directory)
    private readonly directoriesRepository: TreeRepository<Directory>,
  ) {}

  async findAll() {
    return await this.directoriesRepository.findTrees();
  }
}

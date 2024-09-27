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

  async findLogs(id: number) {
    const directory = await this.directoriesRepository.findOne({
      where: {
        id,
      },
      relations: {
        accessedFilesLogs: {
          institution: true,
        },
      },
      order: {
        accessedFilesLogs: {
          accessedAt: 'DESC',
        },
      },
    });

    const ancestors = await this.directoriesRepository.findAncestors(directory);
    const path = ancestors.map((dir) => dir.name).join('/');

    return {
      path,
      ...directory,
    };
  }
}

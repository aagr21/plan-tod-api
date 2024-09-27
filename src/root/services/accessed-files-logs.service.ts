import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccessedFileLogDto } from '@root/models/dto';
import { AccessedFileLog, Directory, Institution } from '@root/models/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AccessedFilesLogsService {
  constructor(
    @InjectRepository(AccessedFileLog)
    private readonly accessedFilesLogsRepository: Repository<AccessedFileLog>,
    @InjectRepository(Institution)
    private readonly institutionsRepository: Repository<Institution>,
    @InjectRepository(Directory)
    private readonly directoriesRepository: Repository<Directory>,
  ) {}

  async create(createAccessedFileLogDto: CreateAccessedFileLogDto) {
    const { institutionId, directoryId, ...rest } = createAccessedFileLogDto;
    const institution = await this.institutionsRepository.findOne({
      where: {
        id: institutionId,
      },
    });

    const directory = await this.directoriesRepository.findOne({
      where: {
        id: directoryId,
      },
    });

    const newAccessedFileLog: AccessedFileLog =
      this.accessedFilesLogsRepository.create({
        ...rest,
        institution,
        directory,
      });

    return await this.accessedFilesLogsRepository.save(newAccessedFileLog);
  }
}

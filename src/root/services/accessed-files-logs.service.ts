import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccessedFileLogDto } from '@root/models/dto';
import { AccessedFileLog, Institution } from '@root/models/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AccessedFilesLogsService {
  constructor(
    @InjectRepository(AccessedFileLog)
    private readonly accessedFilesLogsRepository: Repository<AccessedFileLog>,
    @InjectRepository(Institution)
    private readonly institutionRepository: Repository<Institution>,
  ) {}

  async create(createAccessedFileLogDto: CreateAccessedFileLogDto) {
    const { institutionId, ...rest } = createAccessedFileLogDto;
    const institution = await this.institutionRepository.findOne({
      where: {
        id: institutionId,
      },
    });

    const newAccessedFileLog: AccessedFileLog =
      this.accessedFilesLogsRepository.create({
        ...rest,
        institution,
      });

    return await this.accessedFilesLogsRepository.save(newAccessedFileLog);
  }
}

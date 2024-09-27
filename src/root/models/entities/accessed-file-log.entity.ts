import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Institution } from './institution.entity';
import { Directory } from './directory.entity';

@Entity({
  name: 'accessed_files_logs',
})
export class AccessedFileLog {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    name: 'accessed_device',
  })
  accessedDevice?: string;

  @Column({
    name: 'accessed_ip',
  })
  accessedIp?: string;

  @Column({
    name: 'accessed_browser',
  })
  accessedBrowser?: string;

  @CreateDateColumn({
    name: 'accessed_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  accessedAt?: Date;

  @ManyToOne(() => Directory, (directory) => directory.accessedFilesLogs)
  @JoinColumn({
    name: 'directory_id'
  })
  directory?: Directory;

  @ManyToOne(() => Institution, (institution) => institution.accessedFilesLogs)
  @JoinColumn({
    name: 'institution_id',
  })
  institution?: Institution;
}

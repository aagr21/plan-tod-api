import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Institution } from './institution.entity';

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

  @ManyToOne(() => Institution, (institution) => institution.accessedFilesLogs)
  @JoinColumn({
    name: 'institution_id',
  })
  institution?: Institution;
}

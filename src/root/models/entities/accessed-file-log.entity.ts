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

import { ValueTransformer } from 'typeorm';

export class DateStringTransformer implements ValueTransformer {
  to(value: Date): string {
    if (!value) return null;
    // Convertir a string en el formato deseado
    return value.toISOString().slice(0, 19).replace('T', ' '); // Formato: "YYYY-MM-DD HH:mm:ss"
  }

  from(value: string): Date {
    if (!value) return null;
    // Convertir de string a Date
    return new Date(value);
  }
}

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
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP(6)',
    transformer: new DateStringTransformer(), // Aplica el transformer aquí
  })
  accessedAt?: Date;

  @ManyToOne(() => Directory, (directory) => directory.accessedFilesLogs)
  @JoinColumn({
    name: 'directory_id',
  })
  directory?: Directory;

  @ManyToOne(() => Institution, (institution) => institution.accessedFilesLogs)
  @JoinColumn({
    name: 'institution_id',
  })
  institution?: Institution;
}

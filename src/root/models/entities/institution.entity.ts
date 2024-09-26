import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Credential } from './credential.entity';
import { AccessedFileLog } from './accessed-file-log.entity';

@Entity({
  name: 'institutions',
})
export class Institution {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    name: 'name',
  })
  name?: string;

  @OneToMany(() => Credential, (credential) => credential.institution)
  credentials?: Credential[];

  @OneToMany(() => AccessedFileLog, (accessedFileLog) => accessedFileLog.institution)
  accessedFilesLogs: AccessedFileLog[];
}

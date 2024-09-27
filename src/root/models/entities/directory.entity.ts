import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Tree,
  TreeChildren,
  TreeParent,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { AccessedFileLog } from './accessed-file-log.entity';

@Entity({
  name: 'directories',
})
@Tree('closure-table')
export class Directory {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({
    default: false,
    name: 'is_file',
  })
  isFile?: boolean; // Indica si es archivo o directorio

  @TreeChildren({
    cascade: true,
  })
  children?: Directory[];

  @TreeParent()
  @JoinColumn({ name: 'parent_id' })
  parent?: Directory;

  @OneToMany(() => AccessedFileLog, (accessedFileLog) => accessedFileLog.directory)
  accessedFilesLogs?: AccessedFileLog[];
}

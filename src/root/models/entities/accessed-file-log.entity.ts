import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

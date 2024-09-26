import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Institution } from './institution.entity';

@Entity({
  name: 'credentials',
})
export class Credential {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    type: 'varchar',
    name: 'password',
    unique: true,
  })
  password?: string;

  @ManyToOne(() => Institution, (institution) => institution.credentials)
  @JoinColumn({
    name: 'institution_id'
  })
  institution?: Institution;
}

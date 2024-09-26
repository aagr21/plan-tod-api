import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Credential } from './credential.entity';

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
}

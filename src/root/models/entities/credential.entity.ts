import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

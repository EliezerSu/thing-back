import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'time without time zone',
  })
  fecha_creacion: Date;

  @UpdateDateColumn({
    type: 'time without time zone',
  })
  fecha_actualizacion?: Date;
}

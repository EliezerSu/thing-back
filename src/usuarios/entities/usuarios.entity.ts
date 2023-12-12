import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EstadoEnum, GeneroEnum, IUsuario } from 'thing-package';

@Entity({ name: 'usuarios' })
export class UsuariosEntity extends BaseEntity implements IUsuario {
  @PrimaryGeneratedColumn('increment')
  id_usuario: number;
  @Column({ unique: true })
  usuario: string;
  @Column()
  contrasena: string;
  @Column()
  nombres: string;
  @Column()
  apellidos: string;
  @Column({ unique: true })
  correo: string;
  @Column({ type: 'timestamptz' })
  fecha_nacimiento: Date;
  @Column()
  celular: string;
  @Column({ type: 'enum', enum: GeneroEnum })
  sexo: GeneroEnum;
  @Column({ type: 'enum', enum: EstadoEnum, default: EstadoEnum.ACTIVO })
  estado: EstadoEnum;
  @CreateDateColumn()
  fecha_creacion: Date;
  @UpdateDateColumn()
  fecha_actualizacion: Date;
}

import { BaseEntity, Column, Entity } from 'typeorm';
import { EstadoEnum, GeneroEnum, IUsuario } from 'thing-package';

@Entity({ name: 'usuarios' })
export class UsuariosEntity extends BaseEntity implements IUsuario {
  @Column({ unique: true })
  id_usuario: number;
  @Column({ unique: true })
  usuario: string;
  @Column()
  contrasena: string;
  @Column()
  nombres: string;
  @Column()
  apellidos?: string;
  @Column({ unique: true })
  correo: string;
  @Column()
  fecha_nacimiento: string;
  @Column()
  celular?: string;
  @Column({ type: 'enum', enum: GeneroEnum })
  sexo: GeneroEnum;
  @Column({ type: 'enum', enum: EstadoEnum })
  estado: EstadoEnum;
  @Column()
  fecha_creacion: Date;
  @Column()
  fecha_actualizacion?: Date;
}

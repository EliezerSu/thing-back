import { EstadoEnum, GeneroEnum, IUsuario } from 'thing-package';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UsuariosDTO implements IUsuario {
  @IsNotEmpty()
  @IsString()
  usuario: string;

  @IsNotEmpty()
  @IsString()
  contrasena: string;

  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  correo: string;

  @IsNotEmpty()
  @IsDate()
  fecha_nacimiento: Date;

  @IsNotEmpty()
  @IsString()
  celular: string;

  @IsNotEmpty()
  @IsEnum(GeneroEnum)
  sexo: GeneroEnum;
}

export class UsuariosUpdateDTO implements IUsuario {
  @IsOptional()
  @IsString()
  usuario: string;

  @IsOptional()
  @IsString()
  contrasena: string;

  @IsOptional()
  @IsString()
  nombres: string;

  @IsOptional()
  @IsString()
  apellidos: string;

  @IsOptional()
  @IsString()
  correo: string;

  @IsOptional()
  @IsDate()
  fecha_nacimiento: Date;

  @IsOptional()
  @IsString()
  celular: string;

  @IsOptional()
  @IsEnum(GeneroEnum)
  sexo: GeneroEnum;

  @IsOptional()
  @IsEnum(EstadoEnum)
  estado: EstadoEnum;
}

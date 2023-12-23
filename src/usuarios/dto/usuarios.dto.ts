import { EstadoEnum, GeneroEnum, IUsuario } from 'thing-package';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UsuariosDTO implements IUsuario {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "Nombre de usuario" })
  usuario: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "Contraseña de usuario" })
  contrasena: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "Nombre del usuario" })
  nombres: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "Apellidos del usuario" })
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "Correo del usuario" })
  correo: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({ description: "Fecha de nacimiento del usuario", example: "1999-01-01" })
  fecha_nacimiento: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: "Numero de celular del usuario" })
  celular: string;

  @IsNotEmpty()
  @IsEnum(GeneroEnum)
  @ApiProperty({ description: "Sexo del usuario", enum: GeneroEnum })
  sexo: GeneroEnum;

  @IsEnum(EstadoEnum)
  @IsOptional()
  @ApiProperty({ description: "Nombre del usuario", enum: EstadoEnum })
  estado?: EstadoEnum;
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

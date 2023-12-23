import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import { UsuariosDTO, UsuariosUpdateDTO } from '../dto/usuarios.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags("Usuarios")
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) { }

  @Get()
  @ApiOperation({ summary: 'Listar Usuarios' })
  public async ListarUsuarios() {
    return await this.usuarioService.index();
  }
  @Post()
  @ApiOperation({ summary: 'Crear Usuario' })
  public async CrearUsuario(@Body() request: UsuariosDTO) {
    return await this.usuarioService.store(request);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Obtener por id' })
  public async BuscarUsuario(@Param('id') id: number) {
    return await this.usuarioService.getById(id);
  }
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar Usuario' })
  public async ActualizarUsuario(
    @Param('id') id: number,
    @Body() request: UsuariosUpdateDTO,
  ) {
    return await this.usuarioService.update(id, request);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar Usuario' })
  public async EliminarUsuario(@Param('id') id: number) {
    return await this.usuarioService.delete(id);
  }
}

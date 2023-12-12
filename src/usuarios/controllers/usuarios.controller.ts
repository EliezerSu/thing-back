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

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}

  @Get()
  public async ListarUsuarios() {
    return await this.usuarioService.index();
  }
  @Post()
  public async CrearUsuario(@Body() request: UsuariosDTO) {
    return await this.usuarioService.store(request);
  }
  @Get(':id')
  public async BuscarUsuario(@Param('id') id: number) {
    return await this.usuarioService.getById(id);
  }
  @Put(':id')
  public async ActualizarUsuario(
    @Param('id') id: number,
    @Body() request: UsuariosUpdateDTO,
  ) {
    return await this.usuarioService.update(id, request);
  }
  @Delete(':id')
  public async EliminarUsuario(@Param('id') id: number) {
    return await this.usuarioService.delete(id);
  }
}

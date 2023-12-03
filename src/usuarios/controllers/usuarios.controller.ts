import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}

  @Get()
  getHello(): string {
    return this.usuarioService.getHello();
  }
}

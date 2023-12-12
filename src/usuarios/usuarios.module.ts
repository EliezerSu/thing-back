import { Module } from '@nestjs/common';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosEntity } from './entities/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosEntity])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}

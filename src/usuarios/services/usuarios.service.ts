import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosEntity } from '../entities/usuarios.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DefaultServiceBackStructure } from 'thing-package';
import { UsuariosDTO, UsuariosUpdateDTO } from '../dto/usuarios.dto';
import { ErrorManager } from '../../utils/error.manager';

@Injectable()
export class UsuariosService
  /*implements DefaultServiceBackStructure<UsuariosEntity>*/
{
  constructor(
    @InjectRepository(UsuariosEntity)
    private readonly usuariosRepository: Repository<UsuariosEntity>,
  ) {}
  public async index(): Promise<UsuariosEntity[]> {
    try {
      return await this.usuariosRepository.find();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async store(data: UsuariosDTO): Promise<UsuariosEntity> {
    try {
      return await this.usuariosRepository.save(data);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async getById(id: number): Promise<UsuariosEntity> {
    try {
      return await this.usuariosRepository
        .createQueryBuilder('usuarios')
        .where({ id_usuario: id })
        .getOne();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async update(
    id: number,
    data: UsuariosUpdateDTO,
  ): Promise<UpdateResult | undefined> {
    try {
      const usuario = await this.usuariosRepository.update(id, data);
      if (usuario.affected === 0) {
        return undefined;
      }
      return usuario;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
  public async delete(id: number): Promise<DeleteResult | undefined> {
    try {
      const usuario = await this.usuariosRepository.delete(id);
      if (usuario.affected === 0) {
        return undefined;
      }
      return usuario;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}

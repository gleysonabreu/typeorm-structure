/* eslint-disable @typescript-eslint/interface-name-prefix */
import User from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IRepositoryUser {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
}

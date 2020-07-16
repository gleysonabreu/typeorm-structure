/* eslint-disable @typescript-eslint/interface-name-prefix */
import { injectable, inject } from 'tsyringe';
import UserRepository from '@modules/user/infra/typeorm/repositories/UsersRepository';
import IRepositoryUser from '@modules/user/repositories/IRepositoryUser';
import ApiError from '@shared/errors/ApiError';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  id: string;
}

interface IResponse {
  user: User;
}

@injectable()
class ShowProfileUser {
  constructor(
    @inject(UserRepository)
    private userRepository: IRepositoryUser,
  ) {}

  public async execute({ id }: IRequest): Promise<IResponse | undefined> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new ApiError('User not found.');

    return { user };
  }
}

export default ShowProfileUser;

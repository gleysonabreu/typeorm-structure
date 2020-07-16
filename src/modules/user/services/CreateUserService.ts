import { injectable, inject } from 'tsyringe';
import User from '@modules/user/infra/typeorm/entities/User';
import UserRepository from '@modules/user/infra/typeorm/repositories/UsersRepository';
import IRepositoryUser from '@modules/user/repositories/IRepositoryUser';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IRequest {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  date_birth: Date;
}

@injectable()
class CreateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: IRepositoryUser,
  ) {}

  public async execute({
    firstname,
    lastname,
    username,
    email,
    password,
    photo,
    // eslint-disable-next-line @typescript-eslint/camelcase
    date_birth,
  }: IRequest): Promise<User> {
    const user = await this.userRepository.create({
      firstname,
      lastname,
      username,
      email,
      password,
      photo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      date_birth,
    });

    return user;
  }
}

export default CreateUserService;

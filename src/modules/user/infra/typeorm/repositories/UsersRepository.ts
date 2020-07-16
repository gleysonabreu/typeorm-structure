import { Repository, getRepository } from 'typeorm';
import IRepositoryUser from '@modules/user/repositories/IRepositoryUser';
import User from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

class UserRepository implements IRepositoryUser {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async create({
    firstname,
    lastname,
    username,
    email,
    password,
    photo,
    // eslint-disable-next-line @typescript-eslint/camelcase
    date_birth,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      firstname,
      lastname,
      username,
      email,
      password,
      photo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      date_birth,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;

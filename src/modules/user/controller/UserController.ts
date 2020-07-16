import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/user/services/CreateUserService';
import ShowProfileUserService from '@modules/user/services/ShowProfileUserService';

export default class UserController {
  show = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;

    const showProfileUserService = container.resolve(ShowProfileUserService);
    const user = await showProfileUserService.execute({ id });

    return response.json(user);
  };

  create = async (request: Request, response: Response): Promise<Response> => {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      photo,
      date_birth: dateBirth,
    } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      firstname,
      lastname,
      username,
      email,
      password,
      photo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      date_birth: dateBirth,
    });

    return response.json(user);
  };
}

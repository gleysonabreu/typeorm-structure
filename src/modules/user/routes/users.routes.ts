import { Router } from 'express';
import UserController from '@modules/user/controller/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);
userRoutes.get('/:id', userController.show);

export default userRoutes;

import { Router } from 'express';
import userRoutes from '@modules/user/routes/users.routes';

const routes = Router();

routes.use('/user', userRoutes);

export default routes;

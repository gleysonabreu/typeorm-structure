/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import ApiError from '@shared/errors/ApiError';
import cors from 'cors';
import AppRoutes from '@shared/infra/http/routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares = () => {
    this.app.use(express.json());
    this.app.use(cors());
  };

  private routes = () => {
    this.app.use(AppRoutes);
    this.app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (err instanceof ApiError) {
          return response.status(err.statusCode).json({
            status: 'Error',
            message: err.message,
          });
        }

        console.log(err);

        return response.status(500).json({
          status: 'Error',
          message: 'Internal server error.',
        });
      },
    );
  };
}
export default new App().app;

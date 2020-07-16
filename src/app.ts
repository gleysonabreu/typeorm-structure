import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import ApiError from '@error/ApiError';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
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

export default app;

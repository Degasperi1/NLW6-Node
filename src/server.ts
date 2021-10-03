/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-02 23:19:52
 * @modify date 2021-10-02 23:19:52
 * @desc Server responsable for handle Requests
 */

import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './database/index.ts';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

/**
 * Middleware that is responsable for handle errors on routes
 */
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

app.listen(3000, () => console.log('Server is running'));

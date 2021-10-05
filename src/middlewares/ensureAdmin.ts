/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-05 11:52:08
 * @modify date 2021-10-05 11:52:08
 * @desc [description]
 */

import { Request, Response, NextFunction } from 'express';

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized',
  });
}

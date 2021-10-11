/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-11 16:04:29
 * @modify date 2021-10-11 16:04:29
 * @desc [description]
 */

import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController };

/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-02 23:28:15
 * @modify date 2021-10-02 23:28:15
 * @desc Controller for route CreateUser
 */

import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };

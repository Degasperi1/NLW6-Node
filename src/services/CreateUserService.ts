/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-02 23:21:34
 * @modify date 2021-10-02 23:21:34
 * @desc Service that handles the CreateUser requests
 */

import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlreadyExists = await usersRepositories.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepositories.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepositories.save(user);

    return user;
  }
}

export default CreateUserService;

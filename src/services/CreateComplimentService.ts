/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-11 16:47:43
 * @modify date 2021-10-11 16:47:43
 * @desc Service that handles the CreateCompliment route
 */

import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IComplimentRequest {
  tagId: string;
  userSender: string;
  userReceiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tagId, userSender, userReceiver, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userReceiverExists = await usersRepositories.findOne(userReceiver);

    if (userSender === userReceiver) {
      throw new Error('Incorrect User Receiver');
    }

    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists!');
    }

    const compliment = complimentsRepositories.create({ tagId, userReceiver, userSender, message });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };

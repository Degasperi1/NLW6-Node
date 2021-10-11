/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-11 16:59:43
 * @modify date 2021-10-11 16:59:43
 * @desc [description]
 */

import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tagId, userSender, userReceiver, message } = request.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tagId,
      userSender,
      userReceiver,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };

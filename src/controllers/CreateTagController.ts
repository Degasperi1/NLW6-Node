/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-05 11:31:48
 * @modify date 2021-10-05 11:31:48
 * @desc [description]
 */

import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
}

export { CreateTagController };

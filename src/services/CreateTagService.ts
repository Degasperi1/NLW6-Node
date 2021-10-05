/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-05 11:17:53
 * @modify date 2021-10-05 11:17:53
 * @desc Service that handles the CreateTag route
 */

import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error('Incorrect name!');
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };

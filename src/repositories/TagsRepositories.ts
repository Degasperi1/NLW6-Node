/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-05 11:11:34
 * @modify date 2021-10-05 11:11:34
 * @desc Repository for Tag Entity
 */

import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../entities/Tag';

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };

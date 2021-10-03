/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-02 23:27:42
 * @modify date 2021-10-02 23:27:42
 * @desc Repository for User Entity
 */

import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };

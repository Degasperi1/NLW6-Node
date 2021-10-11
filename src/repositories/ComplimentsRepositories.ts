/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-11 16:45:00
 * @modify date 2021-10-11 16:45:00
 * @desc Repository for Compliment Entity
 */

import { Repository, EntityRepository } from 'typeorm';
import { Compliment } from '../entities/Compliment';

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };

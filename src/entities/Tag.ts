/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-05 10:01:31
 * @modify date 2021-10-05 10:01:31
 * @desc Tag Entity
 */

import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Tag };

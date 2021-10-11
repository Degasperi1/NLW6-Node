/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-11 16:30:41
 * @modify date 2021-10-11 16:30:41
 * @desc Compliment entity
 */

import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tag } from './Tag';
import { User } from './User';

@Entity('compliments')
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column({ name: 'id_user_sender' })
  userSender: string;

  @JoinColumn({ name: 'id_user_sender' })
  @ManyToOne(() => User)
  userSenderFk: User;

  @Column({ name: 'id_user_receiver' })
  userReceiver: string;

  @JoinColumn({ name: 'id_user_receiver' })
  @ManyToOne(() => User)
  userReceiverFk: User;

  @Column({ name: 'id_tag' })
  tagId: string;

  @JoinColumn({ name: 'id' })
  @ManyToOne(() => Tag)
  tagFk: Tag;

  @Column()
  message: string;

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };

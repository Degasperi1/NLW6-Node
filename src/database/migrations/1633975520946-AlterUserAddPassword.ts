/**
 * @author Celso Júnior Degasperi
 * @email cj.degasperi@gmail.com
 * @create date 2021-10-11 15:05:32
 * @modify date 2021-10-11 15:05:32
 * @desc Alter Table 'users' -> add column 'password'
 */

import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAddPassword1633975520946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password');
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompliments1633979550143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'compliments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'id_user_sender',
            type: 'uuid',
          },
          {
            name: 'id_user_receiver',
            type: 'uuid',
          },
          {
            name: 'id_tag',
            type: 'uuid',
          },
          {
            name: 'message',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_user_sender_compliments',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['id_user_sender'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FK_user_receiver_compliments',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['id_user_receiver'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FK_tag_compliments',
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            columnNames: ['id_tag'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('compliments');
  }
}

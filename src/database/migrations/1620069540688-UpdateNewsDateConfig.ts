import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class UpdateNewsDateConfig1620069540688
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'news',
      'likeCount',
      new TableColumn({
        name: 'likeCount',
        type: 'varchar',
        default: '0',
      })
    );
    await queryRunner.changeColumn(
      'news',
      'dislikeCount',
      new TableColumn({
        name: 'dislikeCount',
        type: 'varchar',
        default: '0',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'news',
      'likeCount',
      new TableColumn({
        name: 'likeCount',
        type: 'varchar',
      })
    );
    await queryRunner.changeColumn(
      'news',
      'dislikeCount',
      new TableColumn({
        name: 'dislikeCount',
        type: 'varchar',
      })
    );
  }
}

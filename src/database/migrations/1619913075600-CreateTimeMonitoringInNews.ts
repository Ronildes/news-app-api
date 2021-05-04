import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateTimeMonitoringInNews1619913075600
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'news',
      new TableColumn({
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()',
      })
    );
    await queryRunner.addColumn(
      'news',
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('news', 'createdAt');
    await queryRunner.dropColumn('news', 'updatedAt');
  }
}

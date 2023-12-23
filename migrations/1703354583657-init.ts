import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1703354583657 implements MigrationInterface {
    name = 'Init1703354583657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "estado" SET DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "estado" DROP DEFAULT`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1675642010845 implements MigrationInterface {
    name = 'initialMigration1675642010845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "fullName" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "name" TO "fullName"`);
    }

}

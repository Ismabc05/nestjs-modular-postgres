import {MigrationInterface, QueryRunner} from "typeorm";

export class phoneNumberCustomer1785754256455 implements MigrationInterface {
    name = 'phoneNumberCustomer1785754256455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" character varying(20) NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
    }

}

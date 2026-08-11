import {MigrationInterface, QueryRunner} from "typeorm";

export class camposDeExclude1786441681125 implements MigrationInterface {
    name = 'camposDeExclude1786441681125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "categories"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "categories"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brands"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brands"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_items"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_items"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customers"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customers"."updated_at" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "customers"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customers"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "orders"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_items"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_items"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brands"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brands"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "products"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "categories"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "categories"."created_at" IS NULL`);
    }

}

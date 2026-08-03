import {MigrationInterface, QueryRunner} from "typeorm";

export class removeUnique1785754502667 implements MigrationInterface {
    name = 'removeUnique1785754502667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."password" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_638bac731294171648258260ff2"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "UQ_ac1455877a69957f7466d5dc78e"`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."lastName" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "UQ_2b5187e7475dcc88f25bec39672"`);
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
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "UQ_2b5187e7475dcc88f25bec39672" UNIQUE ("lastName")`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."lastName" IS NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "UQ_ac1455877a69957f7466d5dc78e" UNIQUE ("name")`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."name" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password")`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."password" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."email" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
    }

}

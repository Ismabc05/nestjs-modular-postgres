import {MigrationInterface, QueryRunner} from "typeorm";

export class relationProductBrand1785756141969 implements MigrationInterface {
    name = 'relationProductBrand1785756141969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "brandId" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_bb7d3d9dc1fae40293795ae39d6" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_bb7d3d9dc1fae40293795ae39d6"`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "brandId"`);
    }

}

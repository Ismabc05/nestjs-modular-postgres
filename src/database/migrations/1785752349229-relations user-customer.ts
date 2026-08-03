import {MigrationInterface, QueryRunner} from "typeorm";

export class relationsUserCustomer1785752349229 implements MigrationInterface {
    name = 'relationsUserCustomer1785752349229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "customerId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce" UNIQUE ("customerId")`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "customerId"`);
    }

}

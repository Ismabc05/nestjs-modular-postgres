import {MigrationInterface, QueryRunner} from "typeorm";

export class tablaTernariaParaRelacionMuchosAMuchos1785923652344 implements MigrationInterface {
    name = 'tablaTernariaParaRelacionMuchosAMuchos1785923652344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "date" TO "customerId"`);
        await queryRunner.query(`CREATE TABLE "order_item" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "quantity" integer NOT NULL, "productId" integer, "orderId" integer, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "customerId" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "customerId" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."created_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updated_at" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."created_at" IS NULL`);
        await queryRunner.query(`DROP TABLE "order_item"`);
        await queryRunner.query(`ALTER TABLE "order" RENAME COLUMN "customerId" TO "date"`);
    }

}

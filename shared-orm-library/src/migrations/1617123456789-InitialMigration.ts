import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1617123456789 implements MigrationInterface {
  name = "InitialMigration1617123456789";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "email" character varying NOT NULL UNIQUE,
                "password" character varying NOT NULL,
                CONSTRAINT "PK_users" PRIMARY KEY ("id")
            )
        `);

    await queryRunner.query(`
            CREATE TABLE "settings" (
                "id" SERIAL NOT NULL,
                "isNotificationEnabled" boolean NOT NULL DEFAULT true,
                "isNewDashboardEnabled" boolean NOT NULL DEFAULT false,
                "timezone" character varying NOT NULL DEFAULT 'UTC',
                "userId" integer,
                CONSTRAINT "REL_settings_user" UNIQUE ("userId"),
                CONSTRAINT "PK_settings" PRIMARY KEY ("id"),
                CONSTRAINT "FK_settings_users" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "settings"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}

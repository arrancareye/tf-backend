import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1732380795942 implements MigrationInterface {
    name = 'InitialMigration1732380795942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "gender" character varying NOT NULL, "bio" character varying, "profilePicture" character varying, "isVisible" boolean NOT NULL DEFAULT true, "userId" integer, CONSTRAINT "REL_a24972ebd73b106250713dcddd" UNIQUE ("userId"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "destination" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "country" character varying, "description" character varying, "popularity" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_e45b5ee5788eb3c7f0ae41746e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "travel_preference" ("id" SERIAL NOT NULL, "startDate" date NOT NULL, "endDate" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_ff325f8a98fc56ef76d199ea0e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."subscription_type_enum" AS ENUM('basic', 'premium')`);
        await queryRunner.query(`CREATE TABLE "subscription" ("id" SERIAL NOT NULL, "type" "public"."subscription_type_enum" NOT NULL DEFAULT 'basic', "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "amountPaid" double precision NOT NULL DEFAULT '0', "userId" integer, CONSTRAINT "PK_8c3e00ebd02103caa1174cd5d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("id" SERIAL NOT NULL, "content" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "chatId" integer, "senderId" integer, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chat" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "initiatorId" integer, "receiverId" integer, CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "travel_preference_destinations_destination" ("travelPreferenceId" integer NOT NULL, "destinationId" integer NOT NULL, CONSTRAINT "PK_f60318caeb1c707ca7635e66a58" PRIMARY KEY ("travelPreferenceId", "destinationId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5e2f3d7f8ad53128baab5701dc" ON "travel_preference_destinations_destination" ("travelPreferenceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d7ec67f925936706fb2416ef04" ON "travel_preference_destinations_destination" ("destinationId") `);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_a24972ebd73b106250713dcddd9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "travel_preference" ADD CONSTRAINT "FK_ecbf4bf8db691aa758cd356cbcd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_619bc7b78eba833d2044153bacc" FOREIGN KEY ("chatId") REFERENCES "chat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_bc096b4e18b1f9508197cd98066" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "FK_97824678b3bc963239ccde8304f" FOREIGN KEY ("initiatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "FK_580acbf39bdd5ec33812685e22b" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "travel_preference_destinations_destination" ADD CONSTRAINT "FK_5e2f3d7f8ad53128baab5701dc3" FOREIGN KEY ("travelPreferenceId") REFERENCES "travel_preference"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "travel_preference_destinations_destination" ADD CONSTRAINT "FK_d7ec67f925936706fb2416ef042" FOREIGN KEY ("destinationId") REFERENCES "destination"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "travel_preference_destinations_destination" DROP CONSTRAINT "FK_d7ec67f925936706fb2416ef042"`);
        await queryRunner.query(`ALTER TABLE "travel_preference_destinations_destination" DROP CONSTRAINT "FK_5e2f3d7f8ad53128baab5701dc3"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "FK_580acbf39bdd5ec33812685e22b"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "FK_97824678b3bc963239ccde8304f"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_bc096b4e18b1f9508197cd98066"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_619bc7b78eba833d2044153bacc"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_cc906b4bc892b048f1b654d2aa0"`);
        await queryRunner.query(`ALTER TABLE "travel_preference" DROP CONSTRAINT "FK_ecbf4bf8db691aa758cd356cbcd"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_a24972ebd73b106250713dcddd9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d7ec67f925936706fb2416ef04"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5e2f3d7f8ad53128baab5701dc"`);
        await queryRunner.query(`DROP TABLE "travel_preference_destinations_destination"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "chat"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP TYPE "public"."subscription_type_enum"`);
        await queryRunner.query(`DROP TABLE "travel_preference"`);
        await queryRunner.query(`DROP TABLE "destination"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}

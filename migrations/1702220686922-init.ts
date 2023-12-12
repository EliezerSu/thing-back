import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1702220686922 implements MigrationInterface {
    name = 'Init1702220686922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."usuarios_sexo_enum" AS ENUM('M', 'F')`);
        await queryRunner.query(`CREATE TYPE "public"."usuarios_estado_enum" AS ENUM('1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id_usuario" SERIAL NOT NULL, "usuario" character varying NOT NULL, "contrasena" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "correo" character varying NOT NULL, "fecha_nacimiento" TIMESTAMP WITH TIME ZONE NOT NULL, "celular" character varying NOT NULL, "sexo" "public"."usuarios_sexo_enum" NOT NULL, "estado" "public"."usuarios_estado_enum" NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(), "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777" UNIQUE ("usuario"), CONSTRAINT "UQ_63665765c1a778a770c9bd585d3" UNIQUE ("correo"), CONSTRAINT "PK_dfe59db369749f9042499fd8107" PRIMARY KEY ("id_usuario"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TYPE "public"."usuarios_estado_enum"`);
        await queryRunner.query(`DROP TYPE "public"."usuarios_sexo_enum"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1720836161147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `CREATE TABLE public.store (
            id serial4 NOT NULL,
            descricao varchar(100) NOT NULL,
            CONSTRAINT store_pkey PRIMARY KEY (id));`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('DROP TABLE store')
    }

}

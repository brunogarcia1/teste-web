import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1720836515280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `CREATE TABLE public.product (
            id serial4 NOT NULL,
            descricao varchar(255) NOT NULL,
            codigobarras varchar(13) NOT NULL,
            quantidadeembalagem int4 NOT NULL,
            situacaocadastro bool NOT NULL,
            custo numeric(10, 2) NOT NULL,
            CONSTRAINT product_pkey PRIMARY KEY (id)
);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE product`)
    }

}

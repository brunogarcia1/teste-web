import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1720836668147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
    CREATE TABLE public.product_store (
	id serial4 NOT NULL,
	id_produto int4 NOT NULL,
	precovenda numeric(10, 2) NOT NULL,
	id_loja int4 NOT NULL,
	CONSTRAINT produt_store_pkey PRIMARY KEY (id),
	CONSTRAINT fk_id_loja FOREIGN KEY (id_loja) REFERENCES public.store(id),
	CONSTRAINT fk_id_produtoloja FOREIGN KEY (id_produto) REFERENCES public.product(id)
);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE product_store `)
    }

}

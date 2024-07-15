import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1721005041129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(1, 11.99, 1);

INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(2, 16.99, 2);

INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(3, 27.50, 1);

INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(4, 9.49, 2);

INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(5, 12.99, 1);

INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(6, 6.49, 2);

INSERT INTO public.product_store
(id_produto, precovenda, id_loja)
VALUES(7, 8.75, 1);

   INSERT INTO public.product_store
   (id_produto, precovenda, id_loja)
   VALUES(8, 21.99, 2);

   INSERT INTO public.product_store
   (id_produto, precovenda, id_loja)
   VALUES(9, 3.99, 1);

   INSERT INTO public.product_store
   (id_produto, precovenda, id_loja)
   VALUES(10, 4.49, 2);

   INSERT INTO public.product_store
   (id_produto, precovenda, id_loja)
   VALUES(11, 5.50, 1);

   INSERT INTO public.product_store
   (id_produto, precovenda, id_loja)
    VALUES(12, 19.99, 2);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(13, 9.25, 1);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(14, 3.99, 2);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(15, 1.99, 1);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(16, 2.50, 2);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(17, 5.25, 1);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(18, 4.75, 2);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(19, 7.50, 1);

    INSERT INTO public.product_store
    (id_produto, precovenda, id_loja)
    VALUES(20, 2.25, 2)
`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

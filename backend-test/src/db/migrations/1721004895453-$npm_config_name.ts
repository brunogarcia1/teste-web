import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1721004895453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
          INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('MANTEIGA', '7891000200204', 1, true, 14.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('ARROZ', '7891000300305', 5, true, 25.50);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('FEIJÃO', '7891000400406', 1, true, 7.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('AÇÚCAR', '7891000500507', 2, true, 3.49);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('CAFÉ', '7891000600608', 1, true, 8.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('MACARRÃO', '7891000700709', 3, true, 4.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('ÓLEO DE SOJA', '7891000800800', 1, true, 6.75);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('FARINHA DE TRIGO', '7891000900901', 5, true, 19.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('CREME DE LEITE', '7891001001002', 2, true, 2.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('MOLHO DE TOMATE', '7891001101103', 1, true, 3.49);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('MARGARINA', '7891001201204', 1, true, 4.50);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('LEITE EM PÓ', '7891001301305', 1, true, 17.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('ACHOCOLATADO', '7891001401406', 1, true, 7.25);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('VINAGRE', '7891001501507', 1, true, 1.99);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('SAL', '7891001601608', 1, true, 1.49);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('FERMENTO EM PÓ', '7891001701709', 1, true, 2.50);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('LEITE', '7891001801800', 1, true, 4.25);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('BISCOITO', '7891001901901', 1, true, 3.75);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('SUCO DE UVA', '7891002002002', 1, true, 6.50);

INSERT INTO public.product
(descricao, codigobarras, quantidadeembalagem, situacaocadastro, custo)
VALUES('ÁGUA MINERAL', '7891002102103', 1, true, 1.25);
  
       `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

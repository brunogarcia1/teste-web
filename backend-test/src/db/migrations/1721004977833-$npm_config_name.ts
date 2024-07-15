import { Query } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1721004977833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO public.store
(descricao)
VALUES( 'LOJA 1');

INSERT INTO public.store
(descricao)
VALUES( 'LOJA 2');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

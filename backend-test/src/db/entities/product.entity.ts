import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', name: 'descricao' })
    descricao: string;

    @Column({ type: 'varchar', name: 'codigobarras' })
    codigoBarras: string;

    @Column({ type: 'int4', name: 'quantidadeembalagem' })
    quantidadeEmbalagem: number;

    @Column({ type: 'boolean', name: 'situacaocadastro' })
    situacaoCadastro: boolean;

    @Column('decimal', { precision: 10, scale: 2 })
    custo: number;

}

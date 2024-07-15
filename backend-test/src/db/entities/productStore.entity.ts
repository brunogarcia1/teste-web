import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('product_store')
export class ProductStoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int4', name: 'id_produto' })
    idProduto: number;

    @Column({ type: 'numeric', name: 'precovenda' })
    precoVenda: number;

    @Column({ type: 'int4', name: 'id_loja' })
    idLoja: number;

}

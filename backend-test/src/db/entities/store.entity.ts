import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('store')
export class StoreEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', name: 'descricao' })
    descricao: string;
}



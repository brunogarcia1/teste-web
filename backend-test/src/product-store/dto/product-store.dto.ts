import { IsNotEmpty, IsOptional } from "class-validator";
import { ProductStoreEntity } from "src/db/entities/productStore.entity";

export class ProductStoreDTO {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    idProduto: number;

    @IsNotEmpty()
    precoVenda: number;

    @IsNotEmpty()
    idLoja: number;

    constructor(prodStore?: ProductStoreEntity) {
        if (prodStore) {
            this.id = prodStore.id;
            this.idProduto = prodStore.id;
            this.precoVenda = prodStore.precoVenda;
            this.idLoja = prodStore.idLoja;
        }
    }
}
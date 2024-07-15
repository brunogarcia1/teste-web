import { IsNotEmpty, IsOptional } from "class-validator";
import { StoreEntity } from "src/db/entities/store.entity";

export class StoreDTO {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    descricao: string;


    constructor(entity?: StoreEntity) {
        if (entity) {
            this.id = entity.id;
            this.descricao = entity.descricao;
        }
    }

}


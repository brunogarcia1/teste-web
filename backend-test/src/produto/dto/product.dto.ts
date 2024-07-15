import { IsNotEmpty, IsOptional } from "class-validator";
import { ProductEntity } from "src/db/entities/product.entity";

export class ProductDTO {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    descricao: string;

    @IsNotEmpty()
    codigoBarras: string;

    @IsNotEmpty()
    quantidadeEmbalagem: number;

    @IsOptional()
    situacaoCadastro?: boolean;

    @IsOptional()
    custo?: number;

    @IsOptional()
    precoVenda?: number;

    @IsOptional()
    idLoja?: number;

    constructor(entity?: ProductEntity, precoVenda?: number, idLoja?: number) {
        if (entity) {
            this.id = entity.id;
            this.descricao = entity.descricao;
            this.codigoBarras = entity.codigoBarras;
            this.quantidadeEmbalagem = entity.quantidadeEmbalagem;
            this.situacaoCadastro = entity.situacaoCadastro;
            this.custo = entity.custo;
        }
        if (precoVenda !== undefined) {
            this.precoVenda = precoVenda;
        }
        if (idLoja !== undefined) {
            this.idLoja = idLoja;
        }
    }
}

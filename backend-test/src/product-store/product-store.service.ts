import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductStoreEntity } from 'src/db/entities/productStore.entity';
import { Repository } from 'typeorm';
import { ProductStoreDTO } from './dto/product-store.dto';

@Injectable()
export class ProductStoreService {

    constructor(
        @InjectRepository(ProductStoreEntity)
        private readonly productStoreRepository: Repository<ProductStoreEntity>,
    ) { }


    async createProduto(createProdutoDto: ProductStoreDTO): Promise<ProductStoreEntity> {
        const newProduct = this.productStoreRepository.create(createProdutoDto);
        const savedProduct = await this.productStoreRepository.save(newProduct);

        return savedProduct;
    }

    async findAll(page: number = 1, pageSize: number = 10):
        Promise<{ data: ProductStoreDTO[], total: number }> {
        const skip = (page - 1) * pageSize;

        const [data, total] = await this.productStoreRepository.findAndCount({
            order: { idProduto: 'ASC' },
            skip,
            take: pageSize
        })
        return { data, total }
    }

    async findById(id: number): Promise<ProductStoreDTO> | null {
        const productStoreFound = await this.productStoreRepository.findOne({
            where: { id }
        })

        if (!productStoreFound) {
            return null
        }

        return {
            id: productStoreFound.id,
            idProduto: productStoreFound.idProduto,
            precoVenda: productStoreFound.precoVenda,
            idLoja: productStoreFound.idLoja
        }
    }

    async updateById(id: number, updateProductDto: ProductStoreDTO): Promise<ProductStoreEntity> {
        const productStoreFound = await this.productStoreRepository.findOne({ where: { id } });

        if (!productStoreFound) {
            throw new NotFoundException(`Produto de id  ${id} não encontrado!`);
        }

        productStoreFound.precoVenda = updateProductDto.precoVenda ?? productStoreFound.precoVenda;


        const updatedProduct = await this.productStoreRepository.save(productStoreFound);
        return updatedProduct;
    }

}

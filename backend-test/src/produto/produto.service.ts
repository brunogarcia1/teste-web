import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from 'src/db/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { ProductDTO } from './dto/product.dto';


@Injectable()
export class ProdutoService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) { }


    async createProduto(createProdutoDto: ProductDTO): Promise<ProductEntity> {
        const newProduct = this.productRepository.create(createProdutoDto);
        const savedProduct = await this.productRepository.save(newProduct);

        return savedProduct;
    }

    async findAll(page: number = 1, pageSize: number = 10):
        Promise<{ data: ProductDTO[], total: number }> {
        const skip = (page - 1) * pageSize;

        const [data, total] = await this.productRepository.findAndCount({
            order: { descricao: 'ASC' },
            skip,
            take: pageSize
        })
        return { data, total }
    }





    async findById(id: number): Promise<ProductDTO> | null {
        const productFound = await this.productRepository.findOne({
            where: { id }
        })

        if (!productFound) {
            return null
        }

        return {
            id: productFound.id,
            descricao: productFound.descricao,
            codigoBarras: productFound.codigoBarras,
            quantidadeEmbalagem: productFound.quantidadeEmbalagem,
            situacaoCadastro: productFound.situacaoCadastro,
            custo: productFound.custo
        }
    }

    async findByDescription(descricao: string): Promise<ProductDTO> | null {
        const productFound = await this.productRepository.findOne({
            where: { descricao: Like(`%${descricao}%`) }
        })

        if (!productFound) {
            return null
        }

        return {
            id: productFound.id,
            descricao: productFound.descricao,
            codigoBarras: productFound.codigoBarras,
            quantidadeEmbalagem: productFound.quantidadeEmbalagem,
            situacaoCadastro: productFound.situacaoCadastro,
            custo: productFound.custo
        }
    }

    async updateById(id: number, updateProductDto: ProductDTO): Promise<ProductEntity> {
        const product = await this.productRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        product.descricao = updateProductDto.descricao ?? product.descricao;
        product.codigoBarras = updateProductDto.codigoBarras ?? product.codigoBarras;
        product.quantidadeEmbalagem = updateProductDto.quantidadeEmbalagem ?? product.quantidadeEmbalagem;
        product.situacaoCadastro = updateProductDto.situacaoCadastro ?? product.situacaoCadastro;
        product.custo = updateProductDto.custo ?? product.custo;

        const updatedProduct = await this.productRepository.save(product);
        return updatedProduct;
    }


    async deleteById(id: number): Promise<ProductEntity> {
        const product = await this.productRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Produto de ID ${id} não encontrado`);
        }

        product.situacaoCadastro = !product.situacaoCadastro;

        const updatedProduct = await this.productRepository.save(product);
        return updatedProduct;
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProductDTO } from './dto/product.dto';
import { ProductEntity } from 'src/db/entities/product.entity';


@Controller('produto')
export class ProdutoController {

    constructor(private readonly productService: ProdutoService) { }

    @Post()
    async createProduto(@Body() createProdutoDto: ProductDTO): Promise<ProductEntity> {
        const createdProduto = await this.productService.createProduto(createProdutoDto);
        return createdProduto;
    }

    @Get()
    async findAll(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ): Promise<{ data: ProductDTO[], total: number }> {
        return this.productService.findAll(page, pageSize)
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<ProductDTO> {
        return this.productService.findById(id)
    }

    @Get('/finddescription/:description')
    async findByDescription(@Param('description') description: string): Promise<ProductDTO> {
        return this.productService.findByDescription(description)
    }

    @Put('/:id')
    async updateById(
        @Param('id') id: number,
        @Body() updateProductDTO: ProductDTO
    ): Promise<ProductEntity> {
        const updatedProduct = await this.productService.updateById(id, updateProductDTO);
        return updatedProduct
    }

    @Delete('/:id')
    async deleteById(
        @Param('id') id: number,
    ): Promise<ProductEntity> {
        const updatedProduct = await this.productService.deleteById(id);
        return updatedProduct
    }
}


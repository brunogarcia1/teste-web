import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductStoreService } from './product-store.service';
import { ProductStoreEntity } from 'src/db/entities/productStore.entity';
import { ProductStoreDTO } from './dto/product-store.dto';

@Controller('product-store')
export class ProductStoreController {


    constructor(private readonly prodLojaService: ProductStoreService) { }

    @Post()
    async createProdutoStore(@Body() createProdutoDto: ProductStoreDTO): Promise<ProductStoreEntity> {
        const createdProduto = await this.prodLojaService.createProduto(createProdutoDto);
        return createdProduto;
    }

    @Get()
    async findAll(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ): Promise<{ data: ProductStoreDTO[], total: number }> {
        return this.prodLojaService.findAll(page, pageSize)
    }

    @Get('/:id')
    async findById(@Param('id') id: number): Promise<ProductStoreDTO> {
        return this.prodLojaService.findById(id)
    }

    @Put('/:id')
    async updateById(
        @Param('id') id: number,
        @Body() updateProductDTO: ProductStoreDTO
    ): Promise<ProductStoreEntity> {
        const updatedProduct = await this.prodLojaService.updateById(id, updateProductDTO);
        return updatedProduct
    }

}

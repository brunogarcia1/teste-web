import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { StoreDTO } from './dto/store.dto';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {

    constructor(private readonly storeService: StoreService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(
        @Body() storeDto: StoreDTO
    ): Promise<StoreDTO> {
        return await this.storeService.create(storeDto)
    }

    @Get()
    async findAll(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ): Promise<{ data: StoreDTO[], total: number }> {
        return this.storeService.findAll(page, pageSize)
    }
}

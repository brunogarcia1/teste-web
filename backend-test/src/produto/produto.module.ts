import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/db/entities/product.entity';

@Module({
    imports: [ProdutoModule, TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProdutoController],
    providers: [ProdutoService]
})
export class ProdutoModule { }

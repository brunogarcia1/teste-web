import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStoreEntity } from 'src/db/entities/productStore.entity';
import { ProductStoreController } from './product-store.controller';
import { ProductStoreService } from './product-store.service';

@Module({
    imports: [ProductStoreModule, TypeOrmModule.forFeature([ProductStoreEntity])],
    controllers: [ProductStoreController],
    providers: [ProductStoreService]
})
export class ProductStoreModule { }
